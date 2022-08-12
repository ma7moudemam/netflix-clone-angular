import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() title!:string;
  @Input() movies:any[]=[];
  @Input() isLarge!:boolean
  base_url:string ="https://image.tmdb.org/t/p/original/";
  constructor() { }

  ngOnInit(): void {
  }

}
