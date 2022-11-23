import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService) { }


    data:any;
  ngOnInit(): void {
    //console.log(this.cart.cart);
     this.data =  this.cartService.cart;
  }

  delete(i:number){
    this.data = this.cartService.deleteCart(i);
  }

  isEmpty(){
    if(this.data.length ===0){
      return true;
    }
    return false
  }
  

  
}
