import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  baseUrl = 'https://reqres.in/api'

  getUsers(pageId) {
  	return this.http.get(`${this.baseUrl}/users?page=${pageId}`);
  }

  getUser(userId) {
  	return this.http.get(`${this.baseUrl}/users?id=${userId}`);
  }
}
