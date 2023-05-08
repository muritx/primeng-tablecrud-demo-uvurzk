import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Person } from './person';

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http
      .get<any>('assets/people.json')
      .toPromise()
      .then((res) => <Person[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
