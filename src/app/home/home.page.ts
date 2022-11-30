import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  async makeRequest() {
    // This request has been converted to a minimal form compared to our production app.
    // Amongst the modifications include reduced query parameters, reduced headers,
    // and a mock body that still abides by some of the expected schema.
    const response = await fetch(
      'https://api-js.mixpanel.com/track/?verbose=1&ip=1',
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        // Unencoded, the body is:
        // [{"event": "MyEvent","properties": {}}]
        // It intentionally does not include an auth token, but the lack of one
        // shouldn't be needed to demonstrate error/success cases.
        body: 'data=%5B%0D%0A++++%7B%22event%22%3A+%22MyEvent%22%2C%22properties%22%3A+%7B%7D%7D%0D%0A%5D',
        method: 'POST',
      }
    );

    console.log(await response.json());
  }
}
