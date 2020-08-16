import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: any;
  currentUser: any;
  
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
this.moviesService.getMovies().then(data => this.movies = data);
this.moviesService.getCurrentUser().then(data => this.currentUser = data && data.userDetails);
  }

}
