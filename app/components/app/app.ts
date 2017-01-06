import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h4>app is working</h4>
    <p>guide @ <a href="https://github.com/dav793/angular2-seed">github</a></p>
    
    <div class="row">
      <div class="col s4">
        <sandbox1></sandbox1>
      </div>  
      
      <div class="col s4">
        <sandbox2></sandbox2>
      </div> 
   
      <div class="col s4">
        <sandbox3></sandbox3>
      </div> 
    </div>
    
    <div class="row">
      <div class="col s4">
        <sandbox4></sandbox4>
      </div>  
      
      <div class="col s4">
        <sandbox5></sandbox5>
      </div> 
   
      <div class="col s4">
        <sandbox6></sandbox6>
      </div> 
    </div>`
})
export class AppComponent  { name = 'Angular'; }
