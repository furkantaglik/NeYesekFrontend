import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregister',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './userregister.component.html',
})
export class UserregisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      adress: ['', Validators.required],
      telNo: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  register() {
    if (this.registerForm.valid) {
      let registerModel = Object.assign({}, this.registerForm.value);
      registerModel.telNo = registerModel.telNo.toString();
      this.authService.userRegister(registerModel).subscribe(
        (response) => {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('expiration', response.data.expiration);
          localStorage.setItem('userId', response.data.userId.toString());
          this.toastrService.info(response.message);
          this.router.navigate(['/']);
        },
        (responseError) => {
          this.toastrService.error(responseError.error.message);
        }
      );
    }
  }
}
