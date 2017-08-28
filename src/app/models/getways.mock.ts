import { Gateway } from './gateway';
import { A3GeoLoc, A3Password, A3UserStatus } from './a3';
import { User } from './user';

export const gateways: Gateway[] = [
  new Gateway('gateway 1', 'test adress', new A3GeoLoc(0,0), [
    new User('Yves', new A3Password('test', 'test'), A3UserStatus.DISABLED, '710927'),
    new User('Jean', new A3Password('test', 'test'), A3UserStatus.ACTIVATION_PENDING, '1235512'),
    new User('Yves', new A3Password('test', 'test'), A3UserStatus.ACTIVATED, '710927'),
    new User('Jean', new A3Password('test', 'test'), A3UserStatus.UNREGISTRED, '1235512'),
  ]),
  new Gateway('gateway 2', 'test adress', new A3GeoLoc(0,0), [
    new User('Yves', new A3Password('test', 'test'), A3UserStatus.DISABLED, '710927'),
    new User('Jean', new A3Password('test', 'test'), A3UserStatus.ACTIVATION_PENDING, '1235512'),
    new User('Yves', new A3Password('test', 'test'), A3UserStatus.ACTIVATED, '710927'),
    new User('Jean', new A3Password('test', 'test'), A3UserStatus.UNREGISTRED, '1235512'),
  ])
]
