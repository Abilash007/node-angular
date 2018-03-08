import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {DataService} from './data.service';

@Injectable()
export class ProtectGuard implements CanActivate {

  constructor(private dataService:DataService){}
  canActivate():  boolean {

    if(this.dataService.getSessionData())
    {
    return true;
    }else{
      return false;
    }
  }
}
