import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { YouTubePlayerModule } from "@angular/youtube-player";

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {

  safeURL
  constructor(private http:HttpClient,private sanitizer: DomSanitizer) { 
    let videoURL = "https://www.youtube.com/shorts/-oz5y5bqx_0";
   this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(videoURL);
  }

  ngOnInit(): void {
  }

}
