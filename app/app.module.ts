import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

// import routes
import { routing } from './app.routing';

// import components
import { AppComponent }  from './components/app/app';
import AppNavbarComponent from './components/navbar/navbar';
import { HomeComponent } from './components/home/home';

// import services
import { ContactService } from "./services/contact";

@NgModule({
  imports:      [ 
  					BrowserModule, 
  					routing
				],
  declarations: [ 
  					AppComponent,
  					AppNavbarComponent,
  					HomeComponent
  				],
  providers:    [ 
	                { provide: APP_BASE_HREF, useValue: '/' },
	                ContactService
				],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
