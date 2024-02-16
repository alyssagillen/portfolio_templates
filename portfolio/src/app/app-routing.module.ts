import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingTimelessComponent } from './landing-timeless/landing-timeless.component';
import { LandingMinimalistComponent } from './landing-minimalist/landing-minimalist.component';
import { LandingShowcaseComponent } from './landing-showcase/landing-showcase.component';
import { HomeComponent } from './home/home.component';

const routes: Routes =[
  {path:'', component: HomeComponent},
  {path:'landing-timeless', component: LandingTimelessComponent},
  {path:'landing-minimalist', component: LandingMinimalistComponent},
  {path:'landing-showcase', component: LandingShowcaseComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
