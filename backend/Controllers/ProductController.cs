using System;
using System.Linq;
using backend.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{

    //localhost:.../api/product
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {

        ILogger<ProductController> _logger;
        public DataContext Data { get; set; }

        public ProductController(ILogger<ProductController> logger, DataContext data)
        {
            this.Data = data;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(Data.Products.ToList());
            }
            catch (Exception)
            {
                _logger.LogError("Failed to execute GET");
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult Post()
        {
            try
            {
                return Created("", null);
            }
            catch (Exception)
            {
                _logger.LogError("Failed to execute POST");
                return BadRequest();
            }
        }

        [HttpPut]
        public IActionResult Put()
        {
            try
            {
                return Ok();
            }
            catch (Exception)
            {
                _logger.LogError("Failed to execute PUT");
                return BadRequest();
            }
        }

        [HttpDelete]
        public IActionResult Delete()
        {
            try
            {
                return Ok();
            }
            catch (Exception)
            {
                _logger.LogError("Failed to execute DELETE");
                return BadRequest();
            }
        }
    }
}