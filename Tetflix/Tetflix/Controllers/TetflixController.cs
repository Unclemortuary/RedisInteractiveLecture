using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Tetflix.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TetflixController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<TetflixController> _logger;

        public TetflixController(ILogger<TetflixController> logger)
        {
            _logger = logger;
        }

        [HttpGet("color")]
        public ActionResult<string> GetCurrentColor()
        {
            return "#FFFFFF";
        }
    }
}
