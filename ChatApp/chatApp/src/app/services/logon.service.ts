import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogonService {

  constructor() { }

  public saveData(key:string, value:string){
    localStorage.setItem(key,value);
  }
  public getdata(key:string){
    localStorage.getItem(key);
  }
  public deletedata(key:string, ){
    localStorage.removeItem(key);
  }
}
