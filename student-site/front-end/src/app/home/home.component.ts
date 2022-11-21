import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  writting(){
    this.router.navigate(['writting'])
  }
  reading(){
    this.router.navigate(['reading'])
  }
  stelling(){
    this.router.navigate(['storytelling'])
  }
  spellb(){
    this.router.navigate(['spellb'])
  }
  talkingon(){
    this.router.navigate(['talkoncurr'])
  }
  pspeak(){
    this.router.navigate(['publicspeaking'])
  }
  jornal(){
    this.router.navigate(['jornal'])
  }
  photog(){
    this.router.navigate(['photography'])
  }
  sports(){
    this.router.navigate(['sports'])
  }
  music(){
    this.router.navigate(['music'])
  }
  dance(){
    this.router.navigate(['music'])
  }
  ngOnInit(): void {
    
  }

}
