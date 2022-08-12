import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  show: boolean = false;
  constructor() { 
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.show = true;
      } else {
        this.show = false;
      }
    })
  }

  ngOnInit(): void {
  }

}
