import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NetworkService } from 'src/app/services/network.service';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {
  imageSrc: string | ArrayBuffer;
  file: File;

  constructor(
    private router: Router,
    private networkService: NetworkService,
  ) { }

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const value = form.value;
    let product = new Product();

    product.name = value.name;
    product.image = this.file;
    product.price = value.price;
    product.stock = value.stock;

    this.networkService.addProduct(product).subscribe(
      res => {
        Swal.fire(
          'Add Product!',
          'success'
        )
        this.router.navigate(["/stock"]);
      },
      error => {
        alert(error);
      }
    );
  }

  onPreviewImageChange(event) {
    const metaImage = event.target.files[0]
    if (metaImage) {
      this.file = metaImage

      const reader = new FileReader()
      reader.readAsDataURL(metaImage)
      reader.onload = () => {
        this.imageSrc = reader.result
      }
    }
  }

}
