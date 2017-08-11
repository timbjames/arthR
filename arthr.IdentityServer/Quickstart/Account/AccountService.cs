﻿// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.



// ReSharper disable once CheckNamespace
namespace IdentityServer4.Quickstart.UI
{
    #region Usings

    using System.Collections.Generic;
    using System.Linq;
    using System.Security.Claims;
    using System.Threading.Tasks;
    using Extensions;
    using IdentityModel;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Http.Authentication;
    using Models;
    using Services;
    using Stores;

    #endregion

    public class AccountService
    {
        #region Fields

        private readonly IClientStore _clientStore;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IIdentityServerInteractionService _interaction;

        #endregion

        #region Constructors

        public AccountService(
            IIdentityServerInteractionService interaction,
            IHttpContextAccessor httpContextAccessor,
            IClientStore clientStore)
        {
            _interaction = interaction;
            _httpContextAccessor = httpContextAccessor;
            _clientStore = clientStore;
        }

        #endregion

        #region Public Methods

        public async Task<LoggedOutViewModel> BuildLoggedOutViewModelAsync(string logoutId)
        {
            // get context information (client name, post logout redirect URI and iframe for federated signout)
            LogoutRequest logout = await _interaction.GetLogoutContextAsync(logoutId);

            var vm = new LoggedOutViewModel
            {
                AutomaticRedirectAfterSignOut = AccountOptions.AutomaticRedirectAfterSignOut,
                PostLogoutRedirectUri = logout?.PostLogoutRedirectUri,
                ClientName = logout?.ClientId,
                SignOutIframeUrl = logout?.SignOutIFrameUrl,
                LogoutId = logoutId
            };

            ClaimsPrincipal user = await _httpContextAccessor.HttpContext.GetIdentityServerUserAsync();
            if (user != null)
            {
                string idp = user.FindFirst(JwtClaimTypes.IdentityProvider)?.Value;
                if (idp != null && idp != IdentityServerConstants.LocalIdentityProvider)
                {
                    if (vm.LogoutId == null)
                    {
                        // if there's no current logout context, we need to create one
                        // this captures necessary info from the current logged in user
                        // before we signout and redirect away to the external IdP for signout
                        vm.LogoutId = await _interaction.CreateLogoutContextAsync();
                    }

                    vm.ExternalAuthenticationScheme = idp;
                }
            }

            return vm;
        }

        public async Task<LoginViewModel> BuildLoginViewModelAsync(string returnUrl)
        {
            AuthorizationRequest context = await _interaction.GetAuthorizationContextAsync(returnUrl);
            if (context?.IdP != null)
            {
                // this is meant to short circuit the UI and only trigger the one external IdP
                return new LoginViewModel
                {
                    EnableLocalLogin = false,
                    ReturnUrl = returnUrl,
                    Username = context.LoginHint,
                    ExternalProviders = new[] {new ExternalProvider { AuthenticationScheme = context.IdP } }
                };
            }

            IEnumerable<AuthenticationDescription> schemes = _httpContextAccessor.HttpContext.Authentication.GetAuthenticationSchemes();

            // ReSharper disable once PossibleMultipleEnumeration
            List<ExternalProvider> providers = schemes
                .Where(x => x.DisplayName != null && !AccountOptions.WindowsAuthenticationSchemes.Contains(x.AuthenticationScheme))
                .Select(x => new ExternalProvider
                {
                    DisplayName = x.DisplayName,
                    AuthenticationScheme = x.AuthenticationScheme
                }).ToList();

            if (AccountOptions.WindowsAuthenticationEnabled)
            {
                // this is needed to handle windows auth schemes
                // ReSharper disable once PossibleMultipleEnumeration
                IEnumerable<AuthenticationDescription> windowsSchemes = schemes.Where(s => AccountOptions.WindowsAuthenticationSchemes.Contains(s.AuthenticationScheme));
                if (windowsSchemes.Any())
                {
                    providers.Add(new ExternalProvider
                    {
                        AuthenticationScheme = AccountOptions.WindowsAuthenticationSchemes.First(),
                        DisplayName = AccountOptions.WindowsAuthenticationDisplayName
                    });
                }
            }

            bool allowLocal = true;
            if (context?.ClientId != null)
            {
                Client client = await _clientStore.FindEnabledClientByIdAsync(context.ClientId);
                if (client != null)
                {
                    allowLocal = client.EnableLocalLogin;

                    if (client.IdentityProviderRestrictions != null && client.IdentityProviderRestrictions.Any())
                    {
                        providers = providers.Where(provider => client.IdentityProviderRestrictions.Contains(provider.AuthenticationScheme)).ToList();
                    }
                }
            }

            return new LoginViewModel
            {
                AllowRememberLogin = AccountOptions.AllowRememberLogin,
                EnableLocalLogin = allowLocal && AccountOptions.AllowLocalLogin,
                ReturnUrl = returnUrl,
                Username = context?.LoginHint,
                ExternalProviders = providers.ToArray()
            };
        }

        public async Task<LoginViewModel> BuildLoginViewModelAsync(LoginInputModel model)
        {
            LoginViewModel vm = await BuildLoginViewModelAsync(model.ReturnUrl);
            vm.Username = model.Username;
            vm.RememberLogin = model.RememberLogin;
            return vm;
        }

        public async Task<LogoutViewModel> BuildLogoutViewModelAsync(string logoutId)
        {
            var vm = new LogoutViewModel { LogoutId = logoutId, ShowLogoutPrompt = AccountOptions.ShowLogoutPrompt };

            ClaimsPrincipal user = await _httpContextAccessor.HttpContext.GetIdentityServerUserAsync();
            if (user == null || user.Identity.IsAuthenticated == false)
            {
                // if the user is not authenticated, then just show logged out page
                vm.ShowLogoutPrompt = false;
                return vm;
            }

            LogoutRequest context = await _interaction.GetLogoutContextAsync(logoutId);
            if (context?.ShowSignoutPrompt == false)
            {
                // it's safe to automatically sign-out
                vm.ShowLogoutPrompt = false;
                return vm;
            }

            // show the logout prompt. this prevents attacks where the user
            // is automatically signed out by another malicious web page.
            return vm;
        }

        #endregion
    }
}
