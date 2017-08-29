import { Component } from  '@angular/core';

import { UserService } from './services/user.service';

import { Gateway } from './models/gateway';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showModal : boolean = false;
  visModal : boolean = false;
  gateWays: Gateway[];
  curGateAway: Gateway;
  constructor( private userService: UserService){
    this.gateWays = this.getGetways();
    console.log(this.gateWays)
  };
  public getGetways(): Gateway[]{
    return this.userService.getGetways();
  }
  public openModal(gateway: Gateway):void{
    this.curGateAway = gateway;
    this.showModal = true;
    let timeout = setTimeout(()=>{
      this.visModal = true;
      clearTimeout(timeout);
    },10);
  }
  public closeModal():void{
    this.visModal = false;
    let timeout = setTimeout(()=>{
      this.showModal = false;
      clearTimeout(timeout);
    },300);
  }
  public validate(user,index, name){
    console.log(index, name.value)
    if(name.value.length>3 && name.value.length<6){
      user.name = name.value
    }
    console.log(user.name)
  }
  public changeUserStatus(user: User){
    console.log(user)
    this.userService.sendNewActivationCode(user)
  }
}
