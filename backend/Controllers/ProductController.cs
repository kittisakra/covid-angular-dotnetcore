using System;
using System.Linq;
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

    public ProductController(ILogger<ProductController> logger)
    {
      _logger = logger;
    }

    [HttpGet]
    public IActionResult Get()
    {
      try
      {
        return Ok("kittisak");
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