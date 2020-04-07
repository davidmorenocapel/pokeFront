import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AskService } from 'src/app/services/ask.service';

@Component({
  selector: 'app-poke-result',
  templateUrl: './poke-result.component.html',
  styleUrls: ['./poke-result.component.scss']
})
export class PokeResultComponent implements OnInit {

  info =  "";
  name = '';
  http: any;

  constructor( private askService: AskService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.http.get(`${this.BASE}`);
  }

}