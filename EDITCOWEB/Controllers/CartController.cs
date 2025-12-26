using Microsoft.AspNetCore.Mvc;

namespace EDITCOWEB.Controllers
{
    public class CartController : Controller
    {
        public IActionResult Index()
        {
            // KURAL: Eğer kullanıcı giriş yapmamışsa, Giriş Yap sayfasına gönder.
            if (HttpContext.Session.GetString("UserEmail") == null)
            {
                return Redirect("/Account/Login");
            }

            // Giriş yapmışsa Sepet sayfasını göster.
            return View();
        }
    }
}