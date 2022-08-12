import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { RowComponent } from './components/row/row.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
  
    MoviesComponent,
    RowComponent,
    BannerComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    MoviesComponent,
  ]
})
export class MoviesModule { }
