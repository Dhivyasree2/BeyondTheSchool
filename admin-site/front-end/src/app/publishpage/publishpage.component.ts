import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publishpage',
  templateUrl: './publishpage.component.html',
  styleUrls: ['./publishpage.component.css']
})
export class PublishpageComponent implements OnInit {
  url:any=[]
  a:any=[]
  constructor(private http:HttpClient,private router:Router) { }
  getvideo(){
    this.http.get("http://localhost:3000/getvideos").subscribe((data)=>{
      console.log(data)
    })
  }
  home(){
    this.router.navigate(['home'])
  }
  ngOnInit(): void {
    this.http.get("http://localhost:3000/getvideos").subscribe((data)=>{
      this.url=data
      console.log(data)
       for(let i=0;i<this.url.length;i++){
        this.a.push(this.url[i].filepath);
        console.log(this.a)
       }
    }) 
  }

}
