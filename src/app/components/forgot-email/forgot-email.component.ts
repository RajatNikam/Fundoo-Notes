import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.scss']
})
export class ForgotEmailComponent implements OnInit {
  registerForm!: UntypedFormGroup;
  submitted = false;

  constructor(private formBuilder: UntypedFormBuilder,  private userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      service: "advance",
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log("calling api here ", this.registerForm.value);

    let payload = {
      email: this.registerForm.value.email,
      service: this.registerForm.value.service
    }
    this.userService.forgotEmailService(payload).subscribe((response: any) => {
      console.log("response", response);
    });


    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}