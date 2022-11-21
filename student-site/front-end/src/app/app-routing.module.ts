import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WrittingComponent } from './components/writting/writting.component';
import { ReadingComponent } from './components/reading/reading.component';
import { StorytellingComponent } from './components/storytelling/storytelling.component';
import { SpellbComponent } from './components/spellb/spellb.component';
import { TalkingonsiComponent } from './components/talkingonsi/talkingonsi.component';
import { PublicspeakComponent } from './components/publicspeak/publicspeak.component';
import { JornalComponent } from './components/jornal/jornal.component';
import { PhotogComponent } from './components/photog/photog.component';
import { SportsComponent } from './components/sports/sports.component';
import { MusicComponent } from './components/music/music.component';
import { DanceComponent } from './components/dance/dance.component';
import { GroupComponent } from './group/group.component';
import { UploaddialogueComponent } from './uploaddialogue/uploaddialogue.component';

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{path:'home',component:HomeComponent},
{path:'writting',component:WrittingComponent},
{path:'reading',component:ReadingComponent},
{path:'storytelling',component:StorytellingComponent},
{path:'spellb',component:SpellbComponent},
{path:'talkoncurr',component:TalkingonsiComponent},
{path:'publicspeaking',component:PublicspeakComponent},
{path:'jornal',component:JornalComponent},
{path:'photography',component:PhotogComponent},
{path:'sports',component:SportsComponent},
{path:'music',component:MusicComponent},
{path:'music',component:DanceComponent},
{path:'yourgroup',component:GroupComponent},
{path:'dialogue',component:UploaddialogueComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
