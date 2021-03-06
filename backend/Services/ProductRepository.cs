using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class ProductRepository : IProductRepository
    {
        private readonly DataContext dataContext;
        private readonly IWebHostEnvironment webHostEnvironment;
        public ProductRepository(DataContext dataContext, IWebHostEnvironment webHostEnvironment)
        {
            this.webHostEnvironment = webHostEnvironment;
            this.dataContext = dataContext;
        }

        public void AddProduct(Products product, IFormFile image)
        {
            string fileName = UploadProductImage(image);

            if (!String.IsNullOrEmpty(fileName))
            {
                product.Image = fileName;
            }

            dataContext.Add(product);
            dataContext.SaveChanges();
        }

        public void DeleteProduct(Products product)
        {
            dataContext.Remove(product);
            dataContext.SaveChanges();
        }

        public void EditProduct(Products product, IFormFile image)
        {
            string fileName = UploadProductImage(image);
            if (!String.IsNullOrEmpty(fileName))
            {
                product.Image = fileName;
            }

            dataContext.Entry(product).State = EntityState.Modified;
            dataContext.SaveChanges();
        }

        public string UploadProductImage(IFormFile image)
        {
            string fileName = null;

            if (image != null && image.Length > 0)
            {
                string filePath = webHostEnvironment.WebRootPath + "/images/";
                fileName = Guid.NewGuid().ToString() + System.IO.Path.GetExtension(image.FileName); // unique name
                string fullPath = filePath + fileName;
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    image.CopyTo(stream);
                    stream.Flush();
                }
            }
            return fileName;
        }

        public Products GetProduct(int id)
        {
            return dataContext.Products.Find(id);
        }

        public IEnumerable<Products> GetProducts()
        {
            return dataContext.Products.OrderByDescending(p => p.ProductId).ToList();
        }
    }
}