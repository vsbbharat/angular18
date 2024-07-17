import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from '@services/app.service';
import { StoreService } from '@services/store.service';
export const appConfig: ApplicationConfig = {
  providers: [
    AppService,
    StoreService,
    provideZoneChangeDetection({ eventCoalescing: true }), 

    
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
