import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url:any=[]
  a:any=[]
  constructor(private http:HttpClient) { 
   
  }
  ngOnInit(): void {
    this.http.get("http://localhost:3000/verified").subscribe((data)=>{
      this.url=data
      console.log(data)
       for(let i=0;i<this.url.length;i++){
        this.a.push([this.url[i].filepath,this.url[i].id]);
        console.log(this.a)
       }
    }) 
  }

}
