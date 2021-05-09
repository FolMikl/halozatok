using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt2.Controllers
{
    public class Teszt1 : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
