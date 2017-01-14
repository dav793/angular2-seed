import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { Sandbox6aComponent } from './components/sandbox/sandbox6/sandbox6a.component';
import { Sandbox6bComponent } from './components/sandbox/sandbox6/sandbox6b.component';
import { Sandbox7Component } from './components/sandbox/sandbox7/sandbox7.component';
import { Sandbox7aComponent } from './components/sandbox/sandbox7/sandbox7a.component';
import { Sandbox8Component } from './components/sandbox/sandbox8/sandbox8.component';
import { Sandbox8aComponent } from './components/sandbox/sandbox8/sandbox8a.component';
import { Sandbox9Component } from './components/sandbox/sandbox9/sandbox9.component';
import { DynamicFormComponent } from './components/sandbox/sandbox9/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/sandbox/sandbox9/dynamic-form-question.component';
import { Sandbox10Component } from './components/sandbox/sandbox10/sandbox10.component';
import { Sandbox11Component } from './components/sandbox/sandbox11/sandbox11.component';
import { Sandbox12Component } from './components/sandbox/sandbox12/sandbox12.component';
import { CounterInputComponent } from './components/sandbox/sandbox12/counter-input.component';
import { Sandbox13Component } from './components/sandbox/sandbox13/sandbox13.component';
import { Sandbox14Component } from './components/sandbox/sandbox14/sandbox14.component';
import { SelectInputComponent } from './components/sandbox/sandbox14/select-input.component';
import { Sandbox15Component } from './components/sandbox/sandbox15/sandbox15.component';
import { ComboInputComponent } from './components/sandbox/sandbox15/combo-input.component';
import { Sandbox16Component } from './components/sandbox/sandbox16/sandbox16.component';
import { ComboInputMultiComponent } from './components/sandbox/sandbox16/combo-input-multi.component';

// import services
import { Sandbox3Service } from './components/sandbox/sandbox3/sandbox3.service';
import { Sandbox4Service } from './components/sandbox/sandbox4/sandbox4.service';
import { Sandbox5Service } from './components/sandbox/sandbox5/sandbox5.service';

// import pipes
import { filterSearchPipe } from './components/sandbox/sandbox15/filter-search.pipe';

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
      Sandbox1Component,
      Sandbox2Component,
      Sandbox3Component,
      Sandbox4Component,
      Sandbox5Component,
      Sandbox6Component,
      Sandbox6aComponent,
      Sandbox6bComponent,
      Sandbox7Component,
      Sandbox7aComponent,
      Sandbox8Component,
      Sandbox8aComponent,
      Sandbox9Component,
      DynamicFormComponent,
      DynamicFormQuestionComponent,
      Sandbox10Component,
      Sandbox11Component,
      Sandbox12Component,
      CounterInputComponent,
      Sandbox13Component,
      Sandbox14Component,
      SelectInputComponent,
      Sandbox15Component,
      ComboInputComponent,
      filterSearchPipe,
      Sandbox16Component,
      ComboInputMultiComponent
	],
  providers: [
      Sandbox3Service,
      Sandbox4Service,
      Sandbox5Service
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
