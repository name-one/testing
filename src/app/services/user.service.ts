import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams} from '@angular/http'

import { gateways } from '../models/getways.mock';
import { Gateway } from '../models/gateway';
import { User } from '../models/user';
import { A3UserStatus } from '../models/a3';
@Injectable()
export class UserService {

  constructor() { }
  public getGetways(): Gateway[]{
    return gateways;
  }
  public updateUser(user: User): User{
    //make http request to backend and return new user
    return user;
  }
  public sendNewActivationCode(user: User){
    //make http request to backend and return new user
    user.setStatus( A3UserStatus.ACTIVATION_PENDING)
  }
}
