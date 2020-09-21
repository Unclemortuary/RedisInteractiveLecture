using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
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
        public ActionResult<string> GetCurrentColor([FromRoute]int userId)
        {
            return colorService.GetColor(userId);
        }

        [HttpPost("saveColor/{userId}")]
        public ActionResult SaveColor([FromRoute]int userId, [FromBody]string value)
        {
            colorService.SetColor(userId, value);
            return Ok();
        }

        [HttpGet("recommendations/{userId}")]
        public JsonResult GetRecommendations([FromRoute]int userId)
        {
            return new JsonResult(recommendationsService.GetRecommendations(userId));
        }

        [HttpPut("login")]
        public ActionResult UserLogin([FromBody]int userId)
        {
            usersService.Login(userId);
            return Ok();
        }

        [HttpGet("onlineUsers")]
        public JsonResult GetOnlineUsers()
        {
            return new JsonResult(usersService.GetOnlineUsers());
        }

        [HttpGet("onlineFriends")]
        public JsonResult GetOnlineFriends()
        {
            return new JsonResult(usersService.GetOnlineFriends());
        }
    }
}
