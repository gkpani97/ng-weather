import { Component, OnInit } from '@angular/core';

import { WeatherFetchService } from './services/weather-fetch.service';
import { WeatherReport } from './interfaces/weather-report';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-weather';
  weatherLocations = [["751002", "in"], ["753002", "in"]];
  weatherData:any = [];

  constructor(private wthrFetch: WeatherFetchService) { }
  
  ngOnInit() {
    for (let location of this.weatherLocations) {
      this.wthrFetch.getWeatherReport(location[0], location[1]).subscribe((data) => {
        this.weatherData.push(data);
        console.log(data);
      });
    }
  }

  


}
