import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../database.service';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  statusOfLock: string;
  statusName: string;

  constructor(private dataService: DatabaseService) { 
    
  }

  ngOnInit() {
    this.onGet();
  }

  buttonClicked() {
    if(this.statusOfLock=="unlocked") {
      this.statusOfLock = "locked";
      this.statusName = "Unlock";
      this.onSave();
    }
    else {
      this.statusOfLock = "unlocked"
      this.statusName = "Lock";
      this.onSave();
    }
  }

  onSave() {
    var date = new Date();
    this.dataService.storeData(date, this.statusOfLock)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
  onGet() {
    this.dataService.getData()
      .subscribe(
        (response: any) => {
          console.log(response);
          for (let num in response) {
            console.log(response[num].Status);
            this.statusOfLock = response[num].Status;
          }
          if(this.statusOfLock=='unlocked') {
            this.statusName = 'Lock';
          }
          else {
            this.statusName = 'Unlock';
          }
        },
        (error) => console.log(error)
      );
  }

  sendLock() {
    
  }

  sendUnlock() {

  }

}
