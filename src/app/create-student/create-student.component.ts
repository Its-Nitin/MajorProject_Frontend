import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student : Student = {name:'', course:'' , fee:0, marks:0 }

  constructor( private service : StudentServiceService,private router : Router) {

   }

  ngOnInit(): void {
  }
  saveStudent(){

    this.service.register(this.student).subscribe((result)=>{
      this.router.navigate(["showAll"]);
     }, err=>console.log(err));
  }

}
