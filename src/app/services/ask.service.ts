import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AskService {
  getAll() {
    throw new Error("Method not implemented.");
  }

  private BASE = 'https://pokeapi.co/api/v2/';

  constructor(  private http: HttpClient) {}

   // GET ID
  getByName(name: string) {
    return this.http.get(`${this.BASE}/${name}`);
  }
}
