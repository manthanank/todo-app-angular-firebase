import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyAq5203yUdYZpgJlc9mi2A1RA03Qp7xSf0',
        authDomain: 'todo-app-angular-firebase.firebaseapp.com',
        databaseURL:
          'https://todo-app-angular-firebase-default-rtdb.firebaseio.com',
        projectId: 'todo-app-angular-firebase',
        storageBucket: 'todo-app-angular-firebase.appspot.com',
        messagingSenderId: '457747990162',
        appId: '1:457747990162:web:5ae72a3c09ba41965d484b',
        measurementId: 'G-MVLYWBKZCF',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
