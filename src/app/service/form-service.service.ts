import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  public FromObject = new BehaviorSubject<any>({});
  currentFromObject = this.FromObject.asObservable();
  base_url = environment.base_url;

  getCurrentFromObject(obj: any) {
    this.FromObject.next(obj)
  }
  constructor(private http:HttpClient) { }

  createForm(data:any){
    return this.http.post(`${this.base_url}from/create` , data);
  }

  getAllForms(){
    return this.http.get(`${this.base_url}allform/strucutre`);
  }

  getParticulatForm(name : any){
    return this.http.get(`${this.base_url}getfrom/structure/${name}`)

  }

  addDatatoFrom(data:any){
    return this.http.post(`${this.base_url}from/entry` , data);

  }


  getDataofParticulatForm(name : any){
    return this.http.get(`${this.base_url}getfrom/data/${name}`)

  }

  deleteParticaulatEnrty(id : any){
    return this.http.get(`${this.base_url}from/data/${id}`)

  }


}
