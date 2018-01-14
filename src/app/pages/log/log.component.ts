import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  dataStream: any[] = [];

  constructor(private data: DataService, private dataService: DatabaseService) {
    this.fetchData();
   }

  ngOnInit() {
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
