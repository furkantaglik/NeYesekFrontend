import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const toastrService = inject(ToastrService);
  const router = inject(Router);

  if (authService.isUser()) {
    return true;
  } else {
    router.navigate(['user/login']);
    toastrService.info('Giriş yapmalısınız');
    return false;
  }
};
