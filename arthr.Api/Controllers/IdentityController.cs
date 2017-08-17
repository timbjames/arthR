namespace arthr.Api.Controllers
{
    #region Usings

    using System.Linq;
    using Microsoft.AspNetCore.Mvc;

    #endregion

    [Route("identity")]
    public sealed class IdentityController : BaseController
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
