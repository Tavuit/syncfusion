import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {

  constructor(private http: HttpClient) { }

  getRestCountries() {
    return this.http.get('https://restcountries.com/v3.1/all')
  }
}
