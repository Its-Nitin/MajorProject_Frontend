import { Component, OnInit } from '@angular/core';
import {StudentServiceService} from '../student-service.service';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
allStudent : any;
  constructor(private service : StudentServiceService) { }

  ngOnInit(): void {
    this.showAllStudents();
  }
  showAllStudents(){

    this.service.liststudents().subscribe(result =>{
      this.allStudent = result;
    });
  }
  deleteStudent(id :number){
    this.service.deletestudent(id).subscribe(result=>{
      this.showAllStudents();
      
    },err=>console.log(err))
    
  }

}
