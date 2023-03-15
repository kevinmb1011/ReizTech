import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('https://restcountries.com/v2/all?fields=name,region,area');
  }
}
