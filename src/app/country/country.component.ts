import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryData } from './interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  private readonly route = inject(ActivatedRoute);
  public weather!: CountryData;
  public baseUrl = 'https://restcountries.com/v2/regionalbloc/usan';

  ngOnInit() {
    this.route.data.subscribe(({ weatherData }) => {
      console.log(weatherData.weather[0].main);
      this.weather = weatherData;
    });
  }

}
