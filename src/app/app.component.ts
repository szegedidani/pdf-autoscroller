import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pdfSrc: string = '';

  public loadComplete() {
    setTimeout(() => {
      setInterval(() => {
        const pdf = document.querySelector('.ng2-pdf-viewer-container');
        if (!pdf) return;
        pdf.scrollTop += 1;
      }, 20)

    }, 1000);
  }

  onFileSelected() {
    let $img: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($img.files[0]);
    }
  }
}
