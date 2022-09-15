import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  public FromObject = new BehaviorSubject<any>({});
  currentFromObject = this.FromObject.asObservable();

  getCurrentFromObject(obj: any) {
    this.FromObject.next(obj)
  }
  constructor() { }
}
