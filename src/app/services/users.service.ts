import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Accept': 'application/vnd.api+json',
    // 'Accept-Encoding': 'utf-8',
    'Accept-Language': 'uk',
    'Content-Type': 'application/vnd.api+json',
    'Content-Language': 'uk' })
};
@Injectable({
  providedIn: 'root'
})
  export class UsersService {
    API_ENDPOINT = 'http://testjob.vivasg.com';

    constructor(private httpClient: HttpClient) {}
    
    get() {
      return this.httpClient.get(this.API_ENDPOINT + '/human', httpOptions );
    };
  
    save(user: User) { 
      return this.httpClient.post(this.API_ENDPOINT + '/human', user, httpOptions );
    };

    patch(user: User) {
      return this.httpClient.patch(this.API_ENDPOINT + '/human/' + user, httpOptions );
    }

    delete(id) {
      return this.httpClient.delete(this.API_ENDPOINT + '/human/' + id, httpOptions );
    }
  }

