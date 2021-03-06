﻿namespace arthr.Api.Controllers
{
    #region Usings

    using Models.Core;
    using Utils.Attributes;

    #region Usings

    using Business.Interfaces;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;

    #endregion

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

        #region Public Methods

        [HttpGet, Route("/api/user/getloggedin"), ReturnType(typeof(User))]
        public async Task<IActionResult> GetLoggedInUser()
        {
            return Ok(await _userService.FindByIdAsync(ArthRUser.UserId));
        }

        #endregion
    }
}
