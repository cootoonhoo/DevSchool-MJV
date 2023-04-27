import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Array<User> = [
    {
      id: 1,
      name: "Marco",
      username: "cootoonhoo",
      password: "123"
    }
  ]
  constructor() { }

  getUsers() {
    return this.users;
  }

  getUsersByUserAndEmail(username : string, password : string){
    return this.users.find( (user) => user.username === username && user.password === password);
  }
}
