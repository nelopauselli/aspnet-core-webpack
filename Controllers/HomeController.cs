using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreSpa.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}