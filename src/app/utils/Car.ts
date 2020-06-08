import {Vehicle} from './vehicle';
import { AppService } from '../app.service';

export class Car extends Vehicle {
constructor(public appService:AppService){
  super();
  console.log('car initialized')
}



someMethods(){
}
ngOnDestroy(){
  console.log('car class destroy')
}

toDOWork(){
  console.log('Car to do work');
}
}