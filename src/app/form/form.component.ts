import { Component, OnInit } from '@angular/core';
import { Car } from '../utils/Car';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  utilInstance;
  isInitialization
  constructor(public appService:AppService) { }

  ngOnInit() {
    this.utilInstance=new Car(this.appService);
  }

  ngOnDestroy(){
    console.log('form destroy')
    console.log(this.utilInstance)
   this.utilInstance=null;
  }

}