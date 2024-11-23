using Microsoft.AspNetCore.Mvc;
using MathOperationsApp.Models;

namespace MathOperationsApp.Controllers
{
    public class MathController : Controller
    {
        public IActionResult Index()
        {
            var model = new MathViewModel
            {
                Number1 = new Random().Next(0, 11),
                Number2 = new Random().Next(0, 11)
            };
            return View(model);
        }

        [HttpPost]
        public IActionResult Calculate(MathViewModel model, string operation)
        {
            try
            {
                switch (operation)
                {
                    case "Add":
                        model.Result = model.Number1 + model.Number2;
                        break;
                    case "Subtract":
                        model.Result = model.Number1 - model.Number2;
                        break;
                    case "Multiply":
                        model.Result = model.Number1 * model.Number2;
                        break;
                    case "Divide":
                        if (model.Number2 == 0)
                        {
                            ViewBag.Error = "Ошибка: Деление на ноль!";
                        }
                        else
                        {
                            model.Result = model.Number1 / model.Number2;
                        }
                        break;
                }
            }
            catch (Exception ex)
            {
                ViewBag.Error = $"Ошибка: {ex.Message}";
            }

            return View("Index", model);
        }
    }
}