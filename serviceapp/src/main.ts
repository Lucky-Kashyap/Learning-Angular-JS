import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';



if (environment.production) {
  enableProdMode();
}

// bootstrapApplication(AppComponent,
//   {
//     providers: [
//       provideProtractorTestingSupport(),
//       provideRouter(routeConfig)
//     ]
//   }
// ).catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule,{
  providers:[
    provideProtractorTestingSupport(),
    provideRouter(routeConfig)
  ]
})
  .catch(err => console.error(err));
