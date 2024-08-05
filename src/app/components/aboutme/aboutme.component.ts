import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {
  downloadFile(){
    const url: string = "https://drive.google.com/uc?export=download&id=19eAeZ9eZo3HjsXI96inzAAMI1HfptXWa";
    const fileName: string = "Nayera Hazem Frontend Developer CV";

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();

    document.body.removeChild(link);
  }
}
