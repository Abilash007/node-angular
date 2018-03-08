import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class DataService {

  userData:any;
  constructor(private http:HttpClient) { }

  postDataAPI(formData){



    return this.http.post('http://localhost:5000/signup',formData);

  }

  postLoginAPI(formData){
 
    return this.http.post('http://localhost:5000/login',formData);  


  }

  a(formData){

    return this.http.get('http://localhost:5000/profile',formData);  


  }


  getSessionData(){

    if(sessionStorage.getItem('token')!=null){
      return true;
    }
    else{
      return false;
    }
  }

  setSessionData(userData){
    sessionStorage.setItem('token',userData);
    this.userData=userData;
  }

  getUserData(){
    return this.userData;
  }

  clearSessionData(){
    sessionStorage.clear();
    this.userData='';
  }

}
