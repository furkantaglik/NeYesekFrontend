import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  loginDropdown: boolean = false;
  isLogin!: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLogin = this.authService.isAuthenticated();
  }

  setLoginDropdown(): void {
    this.loginDropdown = !this.loginDropdown;
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['user/login']);
  }
}
