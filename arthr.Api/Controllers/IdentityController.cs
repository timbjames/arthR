namespace arthr.Api.Controllers
{
    #region Usings

    using System.Linq;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    #endregion

    [Route("identity"), Authorize]
    public class IdentityController : Controller
    {
        #region Public Methods

        [HttpGet]
        public IActionResult Get()
        {
            return new JsonResult(from u in User.Claims select new { u.Type, u.Value });
        }

        #endregion
    }
}
