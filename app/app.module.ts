import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// import routes
import { routing } from './app.routing';

// import components
import { AppComponent }  from './components/app/app';
import AppNavbarComponent from './components/navbar/navbar';
import { HomeComponent } from './components/home/home';
import { ContactListComponent } from './components/contact/list/list';
import { ContactViewComponent } from './components/contact/view/view';
import { SeedComponent } from './components/z-seed/seed';

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
  					HomeComponent,
            SeedComponent,
            ContactListComponent,
            ContactViewComponent
  				],
  providers:    [ 
	                ContactService
				        ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
