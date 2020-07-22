using System;
using System.Linq;
using backend.Data;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Http;
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
        private readonly IProductRepository productRepository;

        public ProductController(ILogger<ProductController> logger, IProductRepository productRepository)
        {
            this.productRepository = productRepository;
            _logger = logger;
        }

        //localhost:.../api/product
        [HttpGet]
        public IActionResult GetProducts()
        {
            try
            {
                var result = productRepository.GetProducts();
                return Ok(result);
            }
            catch (Exception error)
            {
                _logger.LogError("Failed to execute GET");
                return StatusCode(500, new { message = error });
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetProductById(int id)
        {
            try
            {
                var result = productRepository.GetProduct(id);
                if (result == null)
                {
                    return NotFound(new { message = "Product not found" });
                }
                return Ok(result);
            }
            catch (Exception error)
            {
                _logger.LogError("Failed to execute GET");
                return StatusCode(500, new { message = error });
            }
        }

        [HttpPost]
        public IActionResult Post([FromForm] Products product, IFormFile file)
        {
            try
            {
                productRepository.AddProduct(product, file);
                return Created("", null);
            }
            catch (Exception error)
            {
                _logger.LogError("Failed to execute POST");
                return StatusCode(500, new { message = error });
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromForm] Products product, IFormFile file)
        {
            try
            {
                var result = productRepository.GetProduct(id);
                if (result == null)
                {
                    return NotFound(new { message = "Product not found" });
                }

                result.Name = product.Name;
                result.Price = product.Price;
                result.Stock = product.Stock;

                productRepository.EditProduct(result, file);
                return Ok(result);
            }
            catch (Exception error)
            {
                _logger.LogError("Failed to execute PUT");
                return StatusCode(500, new { message = error });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var result = productRepository.GetProduct(id);
                if (result == null)
                {
                    return NotFound(new { message = "Product not found" });
                }

                productRepository.DeleteProduct(result);
                return Ok(result);
            }
            catch (Exception)
            {
                _logger.LogError("Failed to execute DELETE");
                return NoContent();
            }
        }
    }
}