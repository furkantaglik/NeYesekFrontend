import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
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
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
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
      })
    ),
  ],
};
