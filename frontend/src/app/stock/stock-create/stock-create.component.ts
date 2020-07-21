import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {
  imageSrc: string | ArrayBuffer;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm) {
    if (form.invalid) {
      return;
    }
    alert(form.value.name);
  }

  onPreviewImageChange(event){
    const metaImage = event.target.files[0]
    if (metaImage) {
      //this.file = metaImage

      const reader = new FileReader()
      reader.readAsDataURL(metaImage)
      reader.onload = () => {
        this.imageSrc = reader.result
      }
    }
  }

}
