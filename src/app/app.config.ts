import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from '@services/app.service';
import { StoreService } from '@services/store.service';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient } from '@angular/common/http';
import { HTTPReqResInterceptor } from '@services/http-req-res.interceptor';
import { environment } from '@env/environment';
import { AuthService } from '@services/auth.service';
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    AuthService,
    AppService,
    StoreService,
    { provide: 'BASE_URL', useValue: environment.apiBaseUrl },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPReqResInterceptor,
      multi: true,
    },
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
