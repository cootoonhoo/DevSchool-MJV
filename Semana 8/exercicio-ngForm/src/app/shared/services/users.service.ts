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
      username: "teste",
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

  createUser(newUser : User){
    newUser.id = this.users[this.users.length - 1].id! + 1;
    this.users.push(newUser);
    console.log('Usuário Cadastrado!',newUser);
  }
}
