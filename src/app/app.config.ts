import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {provideMomentDateAdapter} from  '@angular/material-moment-adapter'
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding()),
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue:{subscriptSizing:'dynamic'}},
    provideMomentDateAdapter({
      parse :{
        dateInput : ['DD-MM-YYYY'],
      },
      display:{
        dateInput : 'DD-MM-YYYY',
        monthYearLabel : 'MMM YYYY',
        dateA11yLabel : 'LL',
        monthYearA11yLabel : 'MMMM YYYY'
      },
    }),
    provideHttpClient(withFetch()),
  ]
};
