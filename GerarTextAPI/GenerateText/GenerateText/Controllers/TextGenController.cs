using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenerateText.Controllers
{
    public class TextGenController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Criar uma variavel global random
        /// </summary>
        private static Random random = new Random();

        /// <summary>
        /// Dada uma lista de caracteres, retorna uma string aleatória
        /// </summary>
        /// <returns> Uma string aleatória</returns>
        [HttpGet("RandomText")]
        public string RandomText()
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return "SKU " + new string(Enumerable.Repeat(chars, 12).Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}
