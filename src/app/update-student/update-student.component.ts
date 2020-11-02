import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student : Student ={name : '', course : '', fee : 0 , marks : 0 };
  constructor(private service : StudentServiceService, private router:Router, private path: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.path.snapshot.params['id'];
    this.service.getStudentById(id).subscribe((data)=>{this.student=data} )
  }

    updateStudent()
    {
      this.service.updateStudent(this.student).subscribe((data)=>{
        this.router.navigate(['showAll']);
      }, (err)=>{console.log(err)})
    }

}
