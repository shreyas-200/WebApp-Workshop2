import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private http:HttpClient,private cartService:CartService) { }

  data:any[]=[];
  

  ngOnInit(): void {  
    this.getData().subscribe(data => {
  
      this.data = data.products.slice(0,8);
    })
  }

  getData():Observable<any>{
    return this.http.get('https://dummyjson.com/products')
  }

  add(id:number){
    this.cartService.add(id);
  }

  
  
}


