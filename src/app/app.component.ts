import { Component } from '@angular/core';
import { DataService } from './data.service';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dataStream: any[] = [];

  constructor(private data: DataService, private dataService: DatabaseService) {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getData()
      .subscribe(
        (response: any) => {
          console.log(response);
          for (let num in response) {
            console.log(response[num].Status);
            this.dataStream.push({Date: response[num].Date,Status: response[num].Status});
          }
          console.log(this.dataStream);
        },
        (error) => console.log(error)
      );
  }

}
