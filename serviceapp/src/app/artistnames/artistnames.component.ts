import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-artistnames',
  templateUrl: './artistnames.component.html',
  styleUrls: ['./artistnames.component.css'],
})
export class ArtistnameComponent implements OnInit {
  public artists = [];

  constructor(private list: DataService) {}

  ngOnInit(): void {
    this.artists = this.list.getList();
  }
}
