import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {

  @Input() weatherData: WeatherData[];

  temperature: string;
  wind: string;
  humidity: string;

  cityEntered: boolean = false;
  dataFound: boolean = false;

  ngOnInit() {
  }

  onSearchChange(searchValue: string) {
    let city = searchValue;
    let cityData = this.weatherData.find(data => data.name.toLowerCase() === city.toLowerCase());

    if (city && city.length > 0) {
      this.cityEntered = true;
    } else {
      this.cityEntered = false;
    }

    if (cityData) {
      this.dataFound = true;
      this.temperature = cityData.temperature;
      this.wind = cityData.wind;
      this.humidity = cityData.humidity;
    } else {
      this.dataFound = false;
    }
  }
}

export interface WeatherData {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}