import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
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
import { YouTubePlayerModule } from "@angular/youtube-player";
import { RightnavComponent } from './nav/rightnav/rightnav.component';
import { PublishpageComponent } from './publishpage/publishpage.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { UploadedvideosComponent } from './uploadedvideos/uploadedvideos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    WrittingComponent,
    ReadingComponent,
    StorytellingComponent,
    SpellbeeComponent,
    TalksoncurrComponent,
    PublicspeakingComponent,
    JournalismComponent,
    PhotographyComponent,
    SportsComponent,
    MusicComponent,
    DanceComponent,
    RightnavComponent,
    PublishpageComponent,
    UploadedvideosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MatSidenavModule,
    YouTubePlayerModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
