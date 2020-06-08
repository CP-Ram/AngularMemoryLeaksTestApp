import { OnDestroy, EventEmitter } from '@angular/core';

export class Vehicle implements OnDestroy{

constructor(){
  console.log('Vehicle initialized')
}
ngOnDestroy(){
  console.log('Vehicle class destroy')
}

toDOWork(){  
}
}