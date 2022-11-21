import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WrittingComponent } from './components/writting/writting.component';
import { ReadingComponent } from './components/reading/reading.component';
import { StorytellingComponent } from './components/storytelling/storytelling.component';
import { SpellbeeComponent } from './components/spellbee/spellbee.component';
import { TalksoncurrComponent } from './components/talksoncurr/talksoncurr.component';
import { PublicspeakingComponent } from './components/publicspeaking/publicspeaking.component';
import { JournalismComponent } from './components/journalism/journalism.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { SportsComponent } from './components/sports/sports.component';
import { MusicComponent } from './components/music/music.component';
import { DanceComponent } from './components/dance/dance.component';
import { PublishpageComponent } from './publishpage/publishpage.component';
import { UploadedvideosComponent } from './uploadedvideos/uploadedvideos.component';

const routes: Routes = [{path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'writting',component:WrittingComponent},
  {path:'reading',component:ReadingComponent},
  {path:'storytelling',component:StorytellingComponent},
  {path:'spellb',component:SpellbeeComponent },
  {path:'talkoncurr',component:TalksoncurrComponent},
  {path:'publicspeaking',component:PublicspeakingComponent},
  {path:'jornal',component:JournalismComponent},
  {path:'photography',component:PhotographyComponent},
  {path:'sports',component:SportsComponent},
  {path:'music',component:MusicComponent},
  {path:'music',component:DanceComponent},
  {path:'publishpage',component:PublishpageComponent},
  {path:'uploadedvideos',component:UploadedvideosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
