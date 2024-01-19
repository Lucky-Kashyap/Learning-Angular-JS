import { Component, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
