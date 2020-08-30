import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {

  constructor() { }

  get(): any {
    return "hello from service"
  }

}