import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UploaddialogueComponent } from 'src/app/uploaddialogue/uploaddialogue.component';
@Component({
  selector: 'app-rightnav',
  templateUrl: './rightnav.component.html',
  styleUrls: ['./rightnav.component.css']
})
export class RightnavComponent implements OnInit {

  constructor(private router:Router,private dialogue:MatDialog) { }
  group(){
    this.router.navigate(['yourgroup'])
  }
  profile(){

  }
  upload(){
    this.dialogue.open(UploaddialogueComponent)
  }
  ngOnInit(): void {
  }

}
