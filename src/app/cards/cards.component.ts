import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  cards: any[] = [];
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<any>('http://localhost:3001/videogames').subscribe(
      (data) => {
        this.cards = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
