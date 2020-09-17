using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Tetflix.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TetflixController : ControllerBase
    {
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

        [HttpGet("recommendations")]
        public JsonResult GetRecommendations()
        {
            return new JsonResult(Data.Films);
        }
    }
}
