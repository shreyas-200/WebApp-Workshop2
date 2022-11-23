import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private http:HttpClient) { }

  data:any[]=[]
  

  ngOnInit(): void {
    this.getUsers().subscribe(data =>{
      
      this.data = data
    })
  }

  getUsers():Observable<any>{
    this.http.get("http://localhost:3000/users").subscribe(data =>{
      console.log(data);
    });
    return this.http.get("http://localhost:3000/users");
  }

  

}
