import { Injectable } from '@nestjs/common';
import { User } from './dto/User.dto';

export type UserInterFace = {
  id: number;
  username: string;
  email: string;
  password: string
};

@Injectable()
export class UserService {
  private users: UserInterFace[] = []

  async findOne(username: string) {
    const user = this.users.find((user) => user.username === username);
    if (user) return user;
    else return null;
  }

  async findAll(){
    return this.users
  }

  async createUser(user: Partial<User>) {
    const newUser: UserInterFace = {
      id: Date.now(),
      username: user.name,
      email: user.email,
      password: user.password
    };
    this.users.push(newUser);
    return newUser;
  }
  async findById(id: number){
    return this.users.find(user=> user.id === id)
  }
}
