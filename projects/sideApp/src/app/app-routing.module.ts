import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'sideApp/home', component:HomeComponent},
    {path:'sideApp/details', component:DetailsComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
