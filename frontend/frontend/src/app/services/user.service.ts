import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }



  getUsers(){
    this.http.get("http://localhost:3000/users").subscribe({next:(data)=>{
      console.log('users',data)
    },error:(error)=>{
      console.log('users error',error)
    }});
  }


  addUser(emailId:string, firstName: string, lastName: string,zipCode: string){
    this.http.post("http://localhost:3000/create-user",{
      emailId : emailId,
      firstName:firstName,
      lastName: lastName,
      zipCode:zipCode
    }).subscribe({next:(data)=>{
      console.log('user',data)
    },error:(error)=>{
      console.log('add users error',error)
    }});
  }

  updateUser(emailId:string, firstName: string, lastName: string,zipCode: string,id:number){
    this.http.post("http://localhost:3000/update-user",{
      id:id,
      emailId : emailId,
      firstName:firstName,
      lastName: lastName,
      zipCode:zipCode
    }).subscribe({next:(data)=>{
      console.log('user',data)
    },error:(error)=>{
      console.log('update users error',error)
    }});
  }

  deleteUser(id:number){
    this.http.post("http://localhost:3000/delete-user",{
      id:id,
    }).subscribe({next:(data)=>{
      console.log('user',data)
    },error:(error)=>{
      console.log('delete users error',error)
    }});
  }
}
