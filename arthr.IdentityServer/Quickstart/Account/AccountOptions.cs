﻿// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.



// ReSharper disable once CheckNamespace
namespace IdentityServer4.Quickstart.UI
{
    #region Usings

    using System;

    #endregion

    public class AccountOptions
    {
        #region Fields

        public static bool AllowLocalLogin = true;
        public static bool AllowRememberLogin = true;
        public static bool AutomaticRedirectAfterSignOut = false;
        public static bool IncludeWindowsGroups = false;

        public static string InvalidCredentialsErrorMessage = "Invalid username or password";
        public static TimeSpan RememberMeLoginDuration = TimeSpan.FromDays(30);

        public static bool ShowLogoutPrompt = true;
        public static readonly string WindowsAuthenticationDisplayName = "Windows";

        // to enable windows authentication, the host (IIS or IIS Express) also must have 
        // windows auth enabled.
        public static bool WindowsAuthenticationEnabled = true;

        public static readonly string WindowsAuthenticationProviderName = "Windows";

        // specify the Windows authentication schemes you want to use for authentication
        public static readonly string[] WindowsAuthenticationSchemes = new string[] { "Negotiate", "NTLM" };

        #endregion
    }
}
