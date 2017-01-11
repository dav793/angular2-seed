import { NgModule, enableProdMode }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule, Http, BaseRequestOptions} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FakeContactHttp } from './components/contact/http.contact.stub';

// import routes
import { routing } from './app.routing';

// import components
import { AppComponent }  from './components/app/app';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { LeftSidebarComponent }  from './components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent }  from './components/right-sidebar/right-sidebar.component';
import { MainPanelComponent }  from './components/main-panel/main-panel.component';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { ContactListComponent }  from './components/contact/list/contact-list.component';
import { ContactViewComponent }  from './components/contact/view/contact-view.component';

import { DfFieldComponent } from './shared/df-field/df-field.component';

// import services
import { ConfigService } from './shared/config.service';
import { WebSocketService } from './shared/websocket.service';
import { ContactService } from './components/contact/contact.service';

// import pipes


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
	],
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MainPanelComponent,
    DashboardComponent,
    ContactListComponent,
    ContactViewComponent,
    DfFieldComponent
	],
  providers: [
    ConfigService,
    WebSocketService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
