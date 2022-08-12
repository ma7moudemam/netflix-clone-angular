import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RequestsService } from './requests.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl:string="https://api.themoviedb.org/3";

  constructor(private http:HttpClient , private request:RequestsService) { }

  fetchTerinding(){
    return this.http.get(this.baseUrl+this.request.requests.fetchTrending)
  }

  fetchNetflixOriginals(){
    return this.http.get(this.baseUrl+this.request.requests.fetchNetflixOriginals);
  }

  fetchTopRated(){
    return this.http.get(this.baseUrl+this.request.requests.fetchTopRated);
  }

  fetchActionMovies(){
    return this.http.get(this.baseUrl+this.request.requests.fetchActionMovies);
  }

  fetchComedyMovies(){
    return this.http.get(this.baseUrl+this.request.requests.fetchComedyMovies);
  }
  
  fetchHorrorMovies(){
    return this.http.get(this.baseUrl+this.request.requests.fetchHorrorMovies);
  }

  fetchRomanceMovies(){
    return this.http.get(this.baseUrl+this.request.requests.fetchRomanceMovies);
  }
}
