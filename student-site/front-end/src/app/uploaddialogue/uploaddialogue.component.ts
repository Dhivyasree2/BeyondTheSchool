import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {  VERSION, ViewChild, ElementRef } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-uploaddialogue',
  templateUrl: './uploaddialogue.component.html',
  styleUrls: ['./uploaddialogue.component.css']
})
export class UploaddialogueComponent implements OnInit {
  fileName = '';
  constructor(private http:HttpClient,private fileInput:ElementRef,private dialoge:Dialog) { }
  dataimage:any;
  @ViewChild('fileInput') 
 fileAttr = 'Choose File';
  a:any
  skill:String=""
  save(v:any,rollno:any){
    var skillname=v
    var id=rollno
    var fn=this.fileName
    this.http.post('http://localhost:3000/uploadvalues',{id,skillname,fn}).subscribe((res)=>{
      console.log(res)
    })
    this.dialoge.closeAll()
  }
  selectChangeHandler(event:any){
    this.skill=event.target.value
  }
  onFileSelected(event:any){
    const file:File = event.target.files[0];
    console.log("file here")
        if (file) {

            this.fileName = file.name;

            const formData = new FormData();

            formData.append("thumbnail", file);

            const upload$ = this.http.post("http://localhost:3000/thumbnail-upload", formData);

            upload$.subscribe();
  }
}
  ngOnInit(): void {
    this.http.get("http://localhost:3000/getskills").subscribe((data)=>{
      this.a=data
    })
    console.log("here")
  }

}
