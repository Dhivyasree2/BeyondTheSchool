import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uploadedvideos',
  templateUrl: './uploadedvideos.component.html',
  styleUrls: ['./uploadedvideos.component.css']
})
export class UploadedvideosComponent implements OnInit {

  url:any=[]
  a:any=[]
  constructor(private http:HttpClient) {}
  verify(id:any){
    this.http.post("http://localhost:3000/changeboolean",{"id":id}).subscribe()
    window.location.reload()
  }
  ngOnInit(): void {
    this.http.get("http://localhost:3000/getvideos").subscribe((data)=>{
      this.url=data
       for(let i=0;i<this.url.length;i++){
        this.a.push([this.url[i].filepath,this.url[i].id]);
       }
    }) 
  }

}
