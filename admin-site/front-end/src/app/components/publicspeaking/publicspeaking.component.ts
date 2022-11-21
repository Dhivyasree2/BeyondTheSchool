import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-publicspeaking',
  templateUrl: './publicspeaking.component.html',
  styleUrls: ['./publicspeaking.component.css']
})
export class PublicspeakingComponent implements OnInit {
  safeURL
  constructor(private http:HttpClient,private sanitizer: DomSanitizer) { 
    let videoURL = "https://www.youtube.com/watch?v=1KT2asqA1J8";
   this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(videoURL);
  }
  ngOnInit(): void {
  }

}
