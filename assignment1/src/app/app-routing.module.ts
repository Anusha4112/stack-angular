import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { CartComponent } from './cart/cart.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { OrderListComponent } from './order-list/order-list.component';


const routes: Routes = [
  {path: '',
  redirectTo: 'signin',
  pathMatch: 'full'
  },
  {path: 'signin',
  component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'listitems',
    component: ListItemsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'detailsview',
    component: DetailsViewComponent
  },
  {
    path: 'orderlist',
    component: OrderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
