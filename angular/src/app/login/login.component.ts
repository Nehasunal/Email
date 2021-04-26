
import { Component, OnInit, OnChanges } from "@angular/core";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators } from "@angular/forms";
import { HttpService } from "../http.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {


  loading = false;
  buttonText = "Submit";

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);



  constructor(public http: HttpService) {}

  ngOnInit() {
    console.log(this.http.test);
  }


  register() {
    this.loading = true;
    this.buttonText = "Submiting...";
    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value
    }
    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res:any = data;
        console.log(
          ` ${user.name} is successfully register and mail has been sent `
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttonText = "Submit";
      },() => {
        this.loading = false;
        this.buttonText = "Submit";
      }
    );
  }
}
