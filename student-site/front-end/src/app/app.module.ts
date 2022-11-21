import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
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
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { TopnavComponent } from './nav/topnav/topnav.component';
import {MatIconModule} from '@angular/material/icon';
import { RightnavComponent } from './nav/rightnav/rightnav.component';
import { GroupComponent } from './group/group.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UploaddialogueComponent } from './uploaddialogue/uploaddialogue.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WrittingComponent,
    ReadingComponent,
    StorytellingComponent,
    SpellbComponent,
    TalkingonsiComponent,
    PublicspeakComponent,
    JornalComponent,
    PhotogComponent,
    SportsComponent,
    MusicComponent,
    DanceComponent,
    SidenavComponent,
    TopnavComponent,
    RightnavComponent,
    GroupComponent,
    UploaddialogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
