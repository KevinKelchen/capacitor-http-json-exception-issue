import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private httpClient: HttpClient) {}

  async makeRequest() {
    const result = await lastValueFrom(
      this.httpClient.get(
        'https://cdn.arcgis.com/sharing/rest/content/items/de26a3cf4cc9451298ea173c4b324736/resources/styles/root.json?f=json'
      )
    );

    console.log(result);
  }
}
