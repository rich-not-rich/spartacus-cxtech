import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const apiKey = "bfc4502bde3c892117e98e4391a47c43";
const apiUrl = "http://api.openweathermap.org/data/2.5";

@Injectable({
  providedIn: "root"
})
export class OpenWeatherService {
  constructor(private http: HttpClient) {}
  getForecast(loc: string): Observable<any> {
    return this.http.get(`${apiUrl}/forecast?q=${loc}&appid=${apiKey}`);
  }
}
