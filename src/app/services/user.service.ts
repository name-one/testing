import { Injectable } from '@angular/core';
import { gateways } from '../models/getways.mock';
import { Gateway } from '../models/gateway';
@Injectable()
export class UserService {

  constructor() { }
  public getGetways(): Gateway[]{
    return gateways;
  }
}
