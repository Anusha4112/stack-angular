import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  getselectedproducts: any;
  indexValue: any;
  getselected: any;
  checkoutproducts: any;
  cleared: any;
  newproducts: any;
  totalProducts: any;
  timeoutPeriod: any;
  message: string;
  editedquantity: any;
  incrementgetdata: any;
  messagedata: any;
  constructor(private router: Router) { }
  decrement(index: number) {
    this.incrementgetdata = JSON.parse(localStorage.getItem('selectedItems'));
    if (this.incrementgetdata !== null) {
      this.incrementgetdata[index].quantity -= 1;
      this.editedquantity = this.getselectedproducts[index].quantity;
      localStorage.setItem('selectedItems', JSON.stringify(this.incrementgetdata));
      console.log('edited quantity', this.editedquantity);
    }
    // this.getselectedproducts[index].quantity -= 1;
    // this.editedquantity = this.getselectedproducts[index].quantity;
    // console.log('edited quantity decrement', this.editedquantity);
  }
  increment(index: number) {
    this.incrementgetdata = JSON.parse(localStorage.getItem('selectedItems'));
    if (this.incrementgetdata !== null) {
      this.incrementgetdata[index].quantity += 1;
      this.editedquantity = this.getselectedproducts[index].quantity;
      localStorage.setItem('selectedItems', JSON.stringify(this.incrementgetdata));
      console.log('edited quantity', this.editedquantity);
      // window.location.reload(true);
    }

  }
  removeproduct(products) {
    this.getselected = JSON.parse(localStorage.getItem('selectedItems'));
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.getselected.length; i++) {
      if (this.getselected[i].id === products.id) {
        this.getselected.splice(i, 1);
      }
    }
    localStorage.selectedItems = JSON.stringify(this.getselected);
    this.getDetails();
    this.bagempty();
  }
  getDetails() {
    this.getselectedproducts = JSON.parse(localStorage.getItem('selectedItems'));
    console.log(this.getselectedproducts);
  }
  placeOrder() {
    this.checkoutproducts = this.getselectedproducts;
    this.newproducts = JSON.parse(localStorage.getItem('order'));
    this.totalProducts = this.checkoutproducts.concat(this.newproducts);
    localStorage.setItem('order', JSON.stringify(this.totalProducts));
    console.log('final products to checkout is', this.checkoutproducts);
    // localStorage.removeItem('checkout');
    localStorage.removeItem('selectedItems');
    // setTimeout('location.reload(true)', this.timeoutPeriod);
    window.location.reload(true);
    // this.message = 'Your are bag is empty';
    // sessionStorage.setItem('emptybag', JSON.stringify(this.message));
    // this.messagedata = JSON.parse(sessionStorage.getItem('emptybag'));
    // localStorage.selectedItems = JSON.stringify(this.cleared);
  }
 bagempty() {
  this.getselectedproducts = JSON.parse(localStorage.getItem('selectedItems'));
  console.log('empty bag is', this.getselectedproducts);
  if (this.getselectedproducts.length === 0) {
    this.message = 'Your bag is empty';
    sessionStorage.setItem('emptybag', JSON.stringify(this.message));
    this.messagedata = JSON.parse(sessionStorage.getItem('emptybag'));
  }
 }

  ngOnInit() {
this.bagempty();
this.getDetails();

    // this.clear();
  }

}
