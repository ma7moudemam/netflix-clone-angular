import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  trendingMovies:any[]=[];
  netflixOriginalsMovies:any[]=[];
  topRatedMovies:any[]=[];
  actionMovies:any[]=[];
  comdyMovies:any[]=[];
  horrorMovies:any[]=[];
  romanceMovies:any[]=[];
  isLarge:boolean=true;
  constructor(private service:MoviesService) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getNetflixOriginals();
    this.getTopRated();
    this.getActionMovies();
    this.getComedyMovies();
    this.getRomanceMovies();
    this.getHorrorMovies();
  }

  getTrendingMovies(){
    this.service.fetchTerinding().subscribe((data:any)=>{
      this.trendingMovies=data.results;
    }
    ), (err:any)=>{
      console.log(err.message);
    }
  }

  getNetflixOriginals(){
    this.service.fetchNetflixOriginals().subscribe((data:any)=>{
      this.netflixOriginalsMovies=data.results;
    }
    ), (err:any)=>{
      console.log(err.message);
    }
  }

  getTopRated(){
    this.service.fetchTopRated().subscribe((data:any)=>{
      this.topRatedMovies=data.results;
    }),(err:any)=>{
      console.log(err.message);
    }
  }

  getActionMovies(){
    this.service.fetchActionMovies().subscribe((data:any)=>{
      this.actionMovies=data.results;
    }),(err:any)=>{
      console.log(err.message);
    }
  }

  getComedyMovies(){
    this.service.fetchComedyMovies().subscribe((data:any)=>{
      this.comdyMovies=data.results;
    }), (err:any)=>{
      console.log(err.message);
    }
  }

  getRomanceMovies(){
    this.service.fetchRomanceMovies().subscribe((data:any)=>{
      this.romanceMovies=data.results;
    }), (err:any)=>{
      console.log(err.message);
    }
  }

  getHorrorMovies(){
    this.service.fetchHorrorMovies().subscribe((data:any)=>{
      this.horrorMovies=data.results;
    }), (err:any)=>{
      console.log(err.message);
    }
  }


}
