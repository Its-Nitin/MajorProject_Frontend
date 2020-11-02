import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';


const myheader=
{
  headers:new HttpHeaders({'Content-type' : 'application/json',
  'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET,PUT,POST,DELETE'
  })
}

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor( private http : HttpClient) { }

  liststudents(): Observable<Student[]>{

     return this.http.get<Student[]>("http://localhost:8090/allStudents");
  }

  
  deletestudent( id : number): Observable<Student>{

    return this.http.delete<Student>("http://localhost:8090/deleteStudent/"+id,myheader);
 }
 register(stu : Student): Observable<Student>{

  return this.http.post<Student>("http://localhost:8090/addStudent",stu,myheader)

 }
 updateStudent(stu : Student): Observable<Student>{

  return this.http.put<Student>("http://localhost:8090/updateStudent",stu,myheader)
 }

 getStudentById(id : number): Observable<Student>{

  return this.http.get<Student>("http://localhost:8090/getStudentById/"+id)
 }

} 
