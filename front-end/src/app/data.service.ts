import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  users: User[];
  baseUrl = "http://localhost:3000/users";



  postUsers(user: User) {

    return this.http.post(this.baseUrl, user);
  }

  putUsers(user: User) {



    return this.http.put(this.baseUrl + `/${user._id}`, user);
  }

  getUsers() {


    return this.http.get(this.baseUrl);

  }

  deleteUser(_id: string) {
    console.log(this.baseUrl + `/${_id}`);

    return this.http.delete(this.baseUrl + `/${_id}`);
  }

}
