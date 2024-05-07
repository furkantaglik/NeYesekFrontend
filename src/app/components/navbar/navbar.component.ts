import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  loginDropdown: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  setLoginDropdown(): void {
    this.loginDropdown = !this.loginDropdown;
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['user/login']);
  }
}
