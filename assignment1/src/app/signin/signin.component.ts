import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  formArray: any;
  email: any;
  password: any;
  profileForm: any;
  signindetails: any;
  entry: any;
  storedPassWord: any;
  storedEmailAddress: any;
  storedUserName: any;
  constructor(private fb: FormBuilder, private router: Router) { }
  onSubmit() {
    this.signindetails = JSON.parse(localStorage.getItem('items'));
    console.log(this.signindetails);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.signindetails.length; i++) {
      this.entry = this.signindetails[i];
      this.storedPassWord = this.entry.password;
      this.storedEmailAddress = this.entry.email;
      this.storedUserName = this.entry.firstname;
      if (this.profileForm.value.email === this.storedEmailAddress && this.profileForm.value.password === this.storedPassWord) {
        sessionStorage.setItem('userName', JSON.stringify(this.entry.firstname));
        this.router.navigate(['user']);
  } else {
    console.log('Wrong crenditals');
  }

}
    this.profileForm.reset();
  }
  ngOnInit() {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', Validators.required]
    });
  }

}
