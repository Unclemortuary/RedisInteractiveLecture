using Microsoft.AspNetCore.Mvc;
using Tetflix.Services;

namespace Tetflix.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TetflixController : ControllerBase
    {
        private readonly IRecommendationsService recommendationsService;
        private readonly IColorService colorService;

        public TetflixController(IRecommendationsService recommendationsService, IColorService colorService)
        {
            this.recommendationsService = recommendationsService;
            this.colorService = colorService;
        }

        [HttpGet("recommendations/{userId}")]
        public JsonResult GetRecommendations([FromRoute] int userId)
        {
            return new JsonResult(recommendationsService.GetRecommendations(userId));
        }

        [HttpGet("color/{userId}")]
        public ActionResult<string> GetCurrentColor([FromRoute] int userId)
        {
            return colorService.GetColor(userId);
        }

        [HttpPost("saveColor/{userId}")]
        public ActionResult SaveColor([FromRoute] int userId, [FromBody] string value)
        {
            colorService.SetColor(userId, value);
            return Ok();
        }
    }
}
