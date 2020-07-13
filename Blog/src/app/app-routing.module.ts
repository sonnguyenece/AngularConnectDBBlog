import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogEditComponent} from "./blog-edit/blog-edit.component";

const routes: Routes = [
  {
    path:'blogEdit',
    component: BlogEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
