namespace arthr.Api.Controllers
{
    #region Usings

    using Filters;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Models.Core;

    #endregion

    [Authorize, ServiceFilter(typeof(ClaimsFilter))]
    public abstract class BaseController : Controller
    {
        #region Constructors

        protected BaseController()
        {
        }

        #endregion

        #region Properties

        public User ArthRUser { protected get; set; }

        #endregion
    }
}
