import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LearningComponent } from './learning/learning.component';

const routes: Routes = [
  {path:'courses',component:CoursesComponent},
  {path:'learning',component:LearningComponent},
  {path:'',component:CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
