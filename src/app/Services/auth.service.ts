import { Injectable } from "@angular/core";
import { AppHttpService } from './AppHttpService.service';

@Injectable()
export class AuthService{

  constructor(private appHttp: AppHttpService){

  }

  registerUser(user : string ){
    this.appHttp.post('/signup', user)

  }

  authenticateUser(){

  }
}
