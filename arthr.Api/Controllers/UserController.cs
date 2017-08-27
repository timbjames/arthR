namespace arthr.Api.Controllers
{
    #region Usings

    using Business.Interfaces;
    using Microsoft.AspNetCore.Mvc;

    #endregion

    [Route("api/[controller]")]
    public sealed class UserController : BaseController
    {
        #region Fields

        private readonly IUserService _userService;

        #endregion

        #region Constructors

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        #endregion
    }
}
