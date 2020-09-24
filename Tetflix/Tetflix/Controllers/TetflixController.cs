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
        private readonly IUsersService usersService;

        public TetflixController(IRecommendationsService recommendationsService, IColorService colorService, IUsersService usersService)
        {
            this.recommendationsService = recommendationsService;
            this.colorService = colorService;
            this.usersService = usersService;
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

        [HttpGet("recommendations/{userId}")]
        public JsonResult GetRecommendations([FromRoute] int userId)
        {
            usersService.Alive(userId);
            return new JsonResult(recommendationsService.GetRecommendations(userId));
        }

        [HttpPut("login/{userId}")]
        public ActionResult UserLogin([FromRoute] int userId)
        {
            usersService.Login(userId);
            return Ok();
        }

        [HttpPut("logout/{userId}")]
        public ActionResult UserLogout([FromRoute] int userId)
        {
            usersService.Logout(userId);
            return Ok();
        }

        [HttpGet("onlineUsers/{userId}")]
        public JsonResult GetOnlineUsers([FromRoute] int userId)
        {
            usersService.Alive(userId);
            return new JsonResult(usersService.GetOnlineUsers());
        }
    }
}
