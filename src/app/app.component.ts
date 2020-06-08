import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Car } from './utils/Car';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(public appService:AppService){

  }

  ngOnInit(){
    console.log('app initialization')
  }

  destroyForm(){
    this.appService.isInitialization=false;
  }

  initializeForm(){
    this.appService.isInitialization=true;
  }
}
