import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  response: any;

  constructor(private http: HttpClient) { }

  makeRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data) => {
        this.response = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
