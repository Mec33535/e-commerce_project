import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
// 3 Günümü yedi....
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimations(), provideNoopAnimations(), provideClientHydration()]
};
