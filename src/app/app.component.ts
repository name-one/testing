import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Gateway } from './models/gateway';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showModal = false;
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
    console.log(this.curGateAway)
  }
  public closeModal():void{
    this.showModal = false;
  }
  public validate(user,index, name){
    console.log(index, name.value)
    if(name.value.length>3 && name.value.length<6){
      user.name = name.value
    }
    console.log(user.name)
  }
}
