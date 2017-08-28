import { A3Password, A3UserStatus } from './a3';
export class User{
  constructor(
    private name: string,
    private password: A3Password,
    private status: A3UserStatus = A3UserStatus.DISABLED,
    protected activationCode: string = null ){}

  /*getters and setters */
  public getName(): string{
    return this.name;
  }
  public setName( value: string): void{
    this.name = value;
  }
  public getPassword(): A3Password{
    return this.password;
  }
  public setPassword( psw: string, salt: string):void{
    this.password = new A3Password(psw, salt)
  }
  public getStatus():A3UserStatus{
    return this.status;
  }
  public setStatus( status: A3UserStatus):void{
    this.status = status;
  }
  /*getters and setters */

  public mockUser(){

  }
}
