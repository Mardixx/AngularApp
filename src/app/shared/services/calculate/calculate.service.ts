import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }
  add(x: number, y: number) {
    return x + y;
  }
}
