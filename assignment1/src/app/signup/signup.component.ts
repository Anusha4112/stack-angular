import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstname: string;
  lastname: string;
  selectcountry: string;
  employee: string;
  email: any;
  password: any;
  checksub: any;
  Country: any;
  // dataArray: any;
  myArray: any;
  registerForm: any;
  constructor(private fb: FormBuilder, private router: Router) { }

  get formFields() {
    return this.registerForm.controls;
  }

  onSubmit() {

    this.myArray = JSON.parse(localStorage.getItem('items')) || [];
    const formData = this.registerForm.value;
    this.myArray.push(formData);
    localStorage.setItem('items', JSON.stringify(this.myArray));
    // console.log('Local data is', this.dataArray);
    this.registerForm.reset();
  }

  ngOnInit() {
    this.Country  = ['India', 'Australia', 'Singapore', 'USA'];
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      selectcountry: ['', Validators.required],
      employee: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      checksub: ['', Validators.required]
    });
  }

}
