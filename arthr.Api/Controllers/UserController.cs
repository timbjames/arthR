namespace arthr.Api.Controllers
{
    using arthr.Models.Core;
    using arthr.Utils.Attributes;
    #region Usings

    using Business.Interfaces;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;

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

        [HttpGet, Route("/api/user/getloggedin"), ReturnType(typeof(User))]
        public async Task<IActionResult> GetLoggedInUser()
        {
            return Ok(await _userService.FindByIdAsync(ArthRUser.UserId));
        }
    }
}
