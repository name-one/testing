import { A3GeoLoc } from './a3';
import { User} from './user';
export class Gateway{
  constructor(
    private name: string,
    private address: string,
    private geoloc: A3GeoLoc,
    private users: User[] = []
  ){

  }
  /* getters and setters*/
  public getName():string{
    return this.name;
  }
  public setName( val: string): void{
    this.name = val;
  }
  public getAddress():string{
    return this.address
  }
  public setAddress(val: string):void{
    this.address = val;
  }
  public getGeoloc():A3GeoLoc{
    return this.geoloc;
  }
  public setGeoloc( longitude: number, latitude: number):void{
    this.geoloc = new A3GeoLoc( longitude, latitude)
  }
  public getUsers():User[]{
    return this.users
  }
  public setUsers(users: User[]):void{
    this.users = users;
  }
  /* getters and setters*/
}
