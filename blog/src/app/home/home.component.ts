import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  // standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocation = this.housingService.getAllHousingLocations();
  }
}
