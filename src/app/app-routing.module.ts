import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
{path :'showAll' , component: ListStudentComponent},
{path : 'createStudent', component : CreateStudentComponent},
{path : 'updateStudent/:id' , component : UpdateStudentComponent},
{path : '' , component : HomeStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
