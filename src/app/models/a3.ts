export class A3Password{
  constructor( private password: string, private salt: string ){}
  /*getters and setters */
  public getPassword(): string{
    return this.password;
  }
  public getSalt():string{
    return this.salt;
  }
  /*getters and setters */
}
export enum A3UserStatus{
  DISABLED = 0,
  UNREGISTRED = 1,
  ACTIVATION_PENDING = 2,
  ACTIVATED = 3
}
export class A3GeoLoc{
  constructor( private longitude: number, private latitude: number){}
  /*getters and setters */
  public setLongitude(val: number):void{
    this.longitude = val;
  }
  public setLatitude(val: number):void{
    this.latitude = val;
  }
  public getLongitude():number{
    return this.longitude;
  }
  public getLatitude():number{
    return this.latitude;
  }
  /*getters and setters */
}
