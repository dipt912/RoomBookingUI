import { Injectable } from '@angular/core';
import { User } from '../../Models/User';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private users: Array<User>;
  constructor() {
    this.users = new Array<User>();

    const user1 = new User();
    user1.name = 'Jone D';
    user1.id = 1;

    const user2 = new User();
    user2.name = 'Victor M';
    user2.id = 2;

    const user3 = new User();
    user3.name = 'John K';
    user3.id = 3;

    this.users.push(user1, user2, user3);

  }

  getUsers(): Observable<Array<User>>  {
    return of(this.users);
  }

  updateUser(user: User): Observable<User> {
    const origionalUser = this.users.find(u => u.id === user.id);
    origionalUser.name = user.name;
    console.log('origionalUser', origionalUser);
    return of(origionalUser);
  }

  addUser(newUser: User , password: string): Observable<User> {
     let id = 0;
     // tslint:disable-next-line:no-shadowed-variable
     for (const user of this.users) {
       if (user.id > id) {
         id = user.id;
       }
     }
     newUser.id = id + 1;
     this.users.push(newUser);
    return of(newUser);
  }
  deleteUser( id: number): Observable<any> {
    const user = this.users.find(r => r.id === id);
    this.users.splice(this.users.indexOf(user), 1);

    return of(null);

  }

  resetUserPass(): Observable<any> {
    return of(null);
  }
}
