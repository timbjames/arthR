namespace arthr.Api.Filters
{
    #region Usings

    using System.Collections.Generic;
    using System.Linq;
    using System.Security.Claims;
    using Business.Interfaces;
    using Controllers;
    using IdentityModel;
    using Microsoft.AspNetCore.Mvc.Filters;

    #endregion

    public sealed class ClaimsFilter : ActionFilterAttribute
    {
        #region Fields

        private readonly IUserService _userService;

        #endregion

        #region Constructors

        public ClaimsFilter(IUserService userService)
        {
            _userService = userService;
        }

        #endregion

        #region Public Methods

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);

            var baseController = context.Controller as BaseController;

            if (baseController == null)
            {
                return;
            }

            if (context.HttpContext.User?.Identity == null || !context.HttpContext.User.Identity.IsAuthenticated)
            {
                return;
            }

            List<Claim> claims = context.HttpContext.User.Claims.ToList();
            int userId = int.Parse(claims.FirstOrDefault(x => x.Type == JwtClaimTypes.Subject)?.Value);
            baseController.ArthRUser = _userService.FindByIdAsync(userId).Result;
        }

        #endregion
    }
}
