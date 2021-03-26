import { InformationComponent } from './information/information.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {
    path:"contact",
    component:ContactComponent,
    pathMatch:"full"
  },
  {
    path:"about",
    component:AboutComponent,
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"quiz",
    component:QuizComponent,
    pathMatch:"full"
  },
  {
    path:"info",
    component:InformationComponent,
    pathMatch:"full"
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
