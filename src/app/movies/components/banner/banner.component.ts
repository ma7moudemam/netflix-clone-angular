import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  movie: any;
  constructor(private service:MoviesService) { }

  ngOnInit(): void {
    this.getNetflixOriginals();
    
  }

  getNetflixOriginals(){
    this.service.fetchNetflixOriginals().subscribe((data:any)=>{
      this.movie=data.results[Math.floor(Math.random()*data.results.length - 1)];
    }
    ), (err:any)=>{
      console.log(err.message);
    }
  }

  truncate(str:string,n:number){
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }



}
