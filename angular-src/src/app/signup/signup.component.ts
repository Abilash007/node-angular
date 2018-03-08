import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  postSignUp(form){

    if(form.password==form.cpassword){
      console.log(form);
      if(form.cpassword){
        delete form.cpassword;
        }

        this.dataService.postDataAPI(form).subscribe((resultData)=>{
            debugger
            if(resultData['status']=="success"){
              alert("Inserted")
            }
        });


    }else{
      alert('Passwords should match');
    }
    
  }

}
