import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-restaurantregister',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './restaurantregister.component.html',
})
export class RestaurantregisterComponent implements OnInit {
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
      name: ['', Validators.required],
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
      this.authService.restaurantRegister(registerModel).subscribe(
        (response) => {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('expiration', response.data.expiration);
          localStorage.setItem(
            'restaurantId',
            response.data.restaurantId.toString()
          );
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
