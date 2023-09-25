import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  

  environment: any= {
    production: false,
    weatherApiBaseUrl: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
    XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
    XRapidAPIHostHeaderValue: 'weather-by-api-ninjas.p.rapidapi.com',
    XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
    XRapidAPIKeyHeaderValue: '01ee2bfbcfmsh43868241fa2f629p192397jsnaa60fb0aef58'
    
  }   

  constructor(private http: HttpClient) {   }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(this.environment.XRapidAPIHostHeaderName, this.environment.XRapidAPIHostHeaderValue)
        .set(this.environment.XRapidAPIKeyHeaderName, this.environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('city', cityName)
    });
  }
}
