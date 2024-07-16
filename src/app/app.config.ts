import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    // Routing
    provideRouter(
    routes,
    withRouterConfig({
      onSameUrlNavigation : 'reload',
    }),
    withInMemoryScrolling({
      scrollPositionRestoration : 'enabled'
    })),
    importProvidersFrom(
      BrowserModule,
    BrowserAnimationsModule
    ),
  
  
    provideAnimationsAsync()]
};
