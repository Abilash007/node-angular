import { Component, OnInit,EventEmitter } from '@angular/core';
import {DataService} from '../data.service';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
  }

  postLogin(form){
    debugger
    this.dataService.postLoginAPI(form).subscribe((resultData)=>{
      debugger
       
      if(resultData['status']=="success"){
        if(resultData['userData']){
            this.dataService.setSessionData(resultData['userData']);
            this.router.navigate(['./profile']);
        }
      }
    });
  }


}
