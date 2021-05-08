import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import{IExersise} from './IExersise';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl ="http://localhost:5000/api/";
  readonly APIExersiseUrl ="http://localhost:5000/api/names";
  readonly APIExersiseNameUrl ="http://localhost:5000/exersise";

  constructor(private http:HttpClient) {  }
   
  GetExersiseList():Observable<IExersise[]>{
      return this.http.get<IExersise[]>(this.APIUrl);
    }

    AddExersise(val:any){
      return this.http.post(this.APIUrl,val)
    }    
   
GetExersise(id:number):Observable<IExersise>{
  return this.http.get<any>(this.APIUrl+id);
}

GetExersiseName():Observable<[]>{
  return this.http.get<any>(this.APIExersiseUrl);
}

AddExersiseName(val:any){
  return this.http.post(this.APIExersiseNameUrl,val);
}


}