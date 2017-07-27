using Microsoft.AspNetCore.Mvc;

namespace anthrWeb.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
