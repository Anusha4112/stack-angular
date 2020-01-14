import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  weluser: any;
  listproducts: any;
  selectedproducts: any;
  storedselectedproducts: any;
  getallproducts =  [];
  constructor(private apiservice: ApiService) { }

  goDetails(id: number) {
    this.apiservice.getProductById(id).subscribe((data) => {
      this.selectedproducts = data;
      console.log(this.selectedproducts);
      this.getallproducts.push(this.selectedproducts);
      // console.log(this.getallproducts);
      this.storedselectedproducts = localStorage.setItem('selectedItems', JSON.stringify(this.getallproducts));
    });
  }
  ngOnInit() {
    this.apiservice.getData().subscribe((data) => {
      this.listproducts = data;
      console.log(this.listproducts);
    });
    // this.weluser = JSON.parse(sessionStorage.getItem('userName'));
    // console.log(this.weluser);
  }

}
