import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

   cart:any[]=[];
   myNewList:any[]=[]
  getDataById(id?:number):Observable<any>{
    return this.http.get('https://dummyjson.com/products/'+ id) 
  }
 
  add(id?:number){
    this.getDataById(id).subscribe(data =>{
      let push = true;
      for(const cart of this.cart) {
        if(cart.id === data.id) {
          push = false;
          break;
        }
      }
      push && this.cart.push(data);
    });
  }

  deleteCart(id: number):any[] {
    this.cart = this.cart.filter(cart=> cart.id != id);
    return this.cart;
  }

}


