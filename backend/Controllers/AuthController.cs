using System;
using System.Linq;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{

    [Route("api")]
    [Route("api/[controller]")]
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
                (Users users, String token) = authRepository.Login(user);
                if(user == null){
                    return Unauthorized(new { message = "username invalid" });
                }

                if(String.IsNullOrEmpty(token)){
                    return Unauthorized(new { message = "password invalid" });
                }

                return Ok(new { token = token, message = "Login Successfully"});
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
                authRepository.Register(user);
                return Ok(new {message = "Successfully registered"});
            }
            catch (Exception error)
            {
                _logger.LogError("Failed to execute DELETE");
                return StatusCode(500, new { message = error });
            }
        }
    }
}