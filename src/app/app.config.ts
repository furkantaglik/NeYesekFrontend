import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import {
  provideNoopAnimations,
  provideAnimations,
} from '@angular/platform-browser/animations';
import {
  LucideAngularModule,
  User,
  Heart,
  ShoppingCart,
  Facebook,
  Instagram,
  Linkedin,
  Search,
  SlidersHorizontal,
  Soup,
  LogOut,
  Clock,
} from 'lucide-angular';
import { AuthInterceptor } from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([AuthInterceptor])),
    provideAnimations(),
    provideNoopAnimations(),
    provideToastr({
      timeOut: 5000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
    }),
    importProvidersFrom(
      LucideAngularModule.pick({
        User,
        Heart,
        ShoppingCart,
        Facebook,
        Instagram,
        Linkedin,
        Search,
        SlidersHorizontal,
        Soup,
        LogOut,
        Clock,
      })
    ),
  ],
};
