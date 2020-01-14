import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  listoffinalproducts: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.listoffinalproducts = JSON.parse(localStorage.getItem('order'));
  }

}
