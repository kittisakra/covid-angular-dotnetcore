using System;
using System.Linq;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{

    [Route("api")]
    [Route("api/authController")]
    public class authController : Controller
    {

        ILogger<authController> _logger;
        private readonly IAuthRepository authRepository;

        public authController(ILogger<authController> logger, IAuthRepository authRepository)
        {
            this.authRepository = authRepository;
            _logger = logger;
        }


        [HttpPost("login")]
        public IActionResult Login([FromBody] Users user)
        {
            try
            {
                return Created("", null);
            }
            catch (Exception error)
            {
                _logger.LogError("Failed to execute DELETE");
                return StatusCode(500, new { message = error });
            }
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] Users user)
        {
            try
            {
                return Created("", null);
            }
            catch (Exception error)
            {
                _logger.LogError("Failed to execute DELETE");
                return StatusCode(500, new { message = error });
            }
        }
    }
}