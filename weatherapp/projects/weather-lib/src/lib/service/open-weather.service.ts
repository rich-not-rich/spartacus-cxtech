import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiKey = '7528a39ab90186926d90f12208dea9a3';
const apiUrl = '';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  getForecast(loc: string) {
    return this.http.get(`${apiUrl}/forecast?q=${loc}&appid=${apiKey}`);
  }
}
