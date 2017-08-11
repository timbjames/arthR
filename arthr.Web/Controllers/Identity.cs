

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace arthr.Web.Controllers
{
    #region Usings

    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;

    #endregion

    public class Identity : Controller
    {
        #region Public Methods

        // GET: /<controller>/
        public async Task Logout()
        {
            await HttpContext.Authentication.SignOutAsync("Cookies");
            await HttpContext.Authentication.SignOutAsync("oidc");
        }

        #endregion
    }
}
