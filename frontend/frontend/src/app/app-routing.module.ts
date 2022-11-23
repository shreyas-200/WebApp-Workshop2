import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
 { 
  path:'',
  component: DashboardComponent
},
{ 
  path:'products',
  component: ProductComponent
},
{
  path:'cart',
  component:CartComponent
},
{
  path:'users',
  component:UsersComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
