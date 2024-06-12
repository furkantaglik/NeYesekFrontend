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
  Bike,
  Star,
  SquareUserRound,
  Trash2,
  CirclePlus,
  Minus,
  Plus,
} from 'lucide-angular';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { IMAGE_CONFIG } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([AuthInterceptor])),
    provideAnimations(),
    provideNoopAnimations(),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
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
        Bike,
        Star,
        SquareUserRound,
        Trash2,
        CirclePlus,
        Minus,
        Plus,
      })
    ),
  ],
};
