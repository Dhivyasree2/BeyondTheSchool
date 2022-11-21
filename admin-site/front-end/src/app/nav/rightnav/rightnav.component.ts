import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rightnav',
  templateUrl: './rightnav.component.html',
  styleUrls: ['./rightnav.component.css']
})
export class RightnavComponent implements OnInit {

  constructor(private router:Router) { }
  nav(){
    this.router.navigate(['uploadedvideos'])
  }
  publish(){
      this.router.navigate(['publishpage'])
  }
  ngOnInit(): void {
  }

}
