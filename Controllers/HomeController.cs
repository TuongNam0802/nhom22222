using Microsoft.AspNetCore.Mvc;

namespace Netcore1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return Content("hello");
        }
    }
}