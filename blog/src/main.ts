import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {provideProtractorTestingSupport} from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig)
    ]
  })
  .catch(err => console.error(err));

  // bootstrapApplication(AppComponent,
    
  // ).catch(err => console.error(err));