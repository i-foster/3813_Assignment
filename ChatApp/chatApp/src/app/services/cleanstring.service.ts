import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CleanstringService {

  constructor() { }
  
  public stringCleaner(x:any){
    let cleanString: string = x.trim().replace(/\s+/g, "");
    return cleanString;
  }

}

