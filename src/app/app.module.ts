import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzButtonModule, MzInputModule, MzCardModule } from 'ng2-materialize';
import { AppComponent } from './app.component';
import { MzNavbarModule } from 'ng2-materialize';
import { NavigationComponent } from './navigation/navigation.component';
import { PagesComponent } from './pages/pages.component';
import { DashComponent } from './pages/dash/dash.component';
import { LogComponent } from './pages/log/log.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DatabaseService } from './database.service';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { DataService } from './data.service';

const appRoutes: Routes =[
  { path: '', component: DashComponent },
  { path: 'log', component: LogComponent}, 
  { path: 'settings', component: SettingsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PagesComponent,
    DashComponent,
    LogComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzNavbarModule,
    HttpModule,
    MzCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DatabaseService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
