import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-image-preview',
  templateUrl: './multiple-image-preview.component.html',
  styleUrls: ['./multiple-image-preview.component.scss']
})
export class MultipleImagePreviewComponent {

  urls = new Array<string>();
 
  detectFiles(event: any) {
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  } 

}
