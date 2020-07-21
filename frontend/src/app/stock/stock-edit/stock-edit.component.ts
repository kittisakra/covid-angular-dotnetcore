import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {
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
