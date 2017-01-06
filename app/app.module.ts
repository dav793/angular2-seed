import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

// import routes
import { routing } from './app.routing';

// import components
import { AppComponent }  from './components/app/app';
import { Sandbox1Component } from './components/sandbox/sandbox1/sandbox1.component';
import { Sandbox2Component } from './components/sandbox/sandbox2/sandbox2.component';
import { Sandbox3Component } from './components/sandbox/sandbox3/sandbox3.component';
import { Sandbox4Component } from './components/sandbox/sandbox4/sandbox4.component';
import { Sandbox5Component } from './components/sandbox/sandbox5/sandbox5.component';
import { Sandbox6Component } from './components/sandbox/sandbox6/sandbox6.component';
import { Sandbox7Component } from './components/sandbox/sandbox6/sandbox7.component';
import { Sandbox8Component } from './components/sandbox/sandbox6/sandbox8.component';

// import services
import { Sandbox3Service } from './components/sandbox/sandbox3/sandbox3.service';
import { Sandbox4Service } from './components/sandbox/sandbox4/sandbox4.service';
import { Sandbox5Service } from './components/sandbox/sandbox5/sandbox5.service';

// import pipes


@NgModule({
  imports: [
	    BrowserModule,
      HttpModule,
	    routing
	],
  declarations: [
			AppComponent,
      Sandbox1Component,
      Sandbox2Component,
      Sandbox3Component,
      Sandbox4Component,
      Sandbox5Component,
      Sandbox6Component,
      Sandbox7Component,
      Sandbox8Component
	],
  providers: [
      Sandbox3Service,
      Sandbox4Service,
      Sandbox5Service
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
