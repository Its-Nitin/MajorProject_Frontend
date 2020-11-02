import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { HttpClientModule} from '@angular/common/http';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FormsModule } from '@angular/forms';
import { HomeStudentComponent } from './home-student/home-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    UpdateStudentComponent,
    CreateStudentComponent,
    HomeStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
