import { Component, OnInit } from '@angular/core';

import { WeatherFetchService } from './services/weather-fetch.service';
import { WeatherReport } from './interfaces/weather-report';
import {FormGroup,FormControl } from "@angular/forms";
import { zip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-weather';

  inputObj = new FormGroup({
    zip: new FormControl(''),
    ccode: new FormControl('')
  });

  weatherLocations = [["751002", "in"], ["753002", "in"]];
  weatherData:any = [];

  constructor(private wthrFetch: WeatherFetchService) { }
  
  ngOnInit() {
    this.weatherData = [];
    for (let location of this.weatherLocations) {
      this.wthrFetch.getWeatherReport(location[0], location[1]).subscribe((data) => {
        this.weatherData.push(data);
        console.log(data);
      });
    }
  }

  AddZIPCC() {
    var z:any = this.inputObj.controls.zip.value;
    var cc:any = this.inputObj.controls.ccode.value
    this.weatherLocations.push([z, cc]);
    this.ngOnInit();
  }


}
