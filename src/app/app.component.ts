import { CommonApiService } from './features/services/common-api.service';
import { Component, OnInit } from '@angular/core';
import { LOCATION_COUNTRY_KEY } from 'src/app/utils/constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private commonApiService: CommonApiService) {}

  ngOnInit(): void {
    this.commonApiService.getRestCountries().subscribe((res: any) => {
      if (!res) return;
      localStorage.setItem(
        LOCATION_COUNTRY_KEY,
        JSON.stringify(
          res?.map((a, index) => ({ id: index + 1, name: a.name.common }))
        )
      );
    });
  }
}
