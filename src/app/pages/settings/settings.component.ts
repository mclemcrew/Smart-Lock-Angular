import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  username: string = "admin";
  constructor() { }

  saveChanges() {
    //Save changes to database here
    console.log("Need to save changes");
  }

  ngOnInit() {
  }

}
