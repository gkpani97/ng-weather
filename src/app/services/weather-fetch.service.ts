import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherReport } from '../interfaces/weather-report';

@Injectable({
  providedIn: 'root'
})
export class WeatherFetchService {

  constructor(private http: HttpClient) { }

    // owmUrl: string = `api.openweathermap.org/data/2.5/weather?zip=751002,in&appid=13fe5399b776d41191e4ef5ce0644a90`;

  getWeatherReport(zip: string, countryCode: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode.toLowerCase()}&appid=13fe5399b776d41191e4ef5ce0644a90`); 
  }

}
