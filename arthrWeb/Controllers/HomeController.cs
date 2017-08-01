using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace arthrWeb.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [Authorize]
        public IActionResult Test()
        {
            return View();
        }
    }
}
