import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor() {

    consultarUsers(){

    }
  }
}
