using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Tetflix.Services;

namespace Tetflix.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TetflixController : ControllerBase
    {
        private readonly IRecommendationsService recommendationService;

        public TetflixController(IRecommendationsService recommendationsService)
        {
            recommendationService = recommendationsService;
        }

        [HttpGet("color")]
        public ActionResult<string> GetCurrentColor()
        {
            return "#FFFFFF";
        }

        [HttpGet("recommendations/{userId}")]
        public JsonResult GetRecommendations([FromRoute]int userId)
        {
            return new JsonResult(recommendationService.GetRecommendations(userId));
        }
    }
}
