import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../app/services/userService/user.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  // user = '1'

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    // localStorage.setItem('SessionUser',this.user)


    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      service: "advance",
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log("calling api here ", this.registerForm.value);

    let payload = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      service: this.registerForm.value.service
    }
    this.userService.loginService(payload).subscribe((response: any) => {
      console.log("response", response);
      localStorage.setItem('token', response.id)
    this.router.navigateByUrl('/dashboard/get-notes')
    });

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

  }

}