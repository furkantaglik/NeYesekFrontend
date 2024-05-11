import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

export const restaurantGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const toastrService = inject(ToastrService);
  const router = inject(Router);

  if (authService.isRestaurant()) {
    return true;
  } else {
    router.navigate(['restaurant/login']);
    toastrService.info('Giriş yapmalısınız');
    return false;
  }
};
