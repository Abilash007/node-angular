import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData:any;
  constructor(private dataService:DataService){}

  ngOnInit() {
      this.userData=this.dataService.getUserData();
      this.dataService.a("").subscribe(data =>{
        debugger
      })
  }

}
