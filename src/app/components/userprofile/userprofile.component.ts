import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserDetail } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './userprofile.component.html',
})
export class UserprofileComponent {
  profileForm!: FormGroup;
  userDetail!: UserDetail;
  userImage!: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getUser();
  }
  createProfileForm() {
    this.profileForm = this.formBuilder.group({
      firstName: [this.userDetail.user.firstName],
      lastName: [this.userDetail.user.lastName],
      email: [this.userDetail.user.email],
      telNo: [this.userDetail.user.telNo],
      adress: [this.userDetail.user.adress],
      id: [this.userDetail.user.id],
    });
  }

  getUser() {
    this.userService
      .getUserDetail(parseInt(localStorage.getItem('userId')!))
      .subscribe((response) => {
        this.userDetail = response.data;
        this.createProfileForm();
      });
  }

  save() {
    let userModel = Object.assign({}, this.profileForm.value);
    this.userService.update(userModel).subscribe(
      (response) => {
        this.toastrService.info(response.message);
      },
      (responseError) => {
        this.toastrService.error(responseError.error.message);
      }
    );
  }
}
