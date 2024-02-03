import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "todo-app-angular-firebase", "appId": "1:457747990162:web:5ae72a3c09ba41965d484b", "databaseURL": "https://todo-app-angular-firebase-default-rtdb.firebaseio.com", "storageBucket": "todo-app-angular-firebase.appspot.com", "apiKey": "AIzaSyAq5203yUdYZpgJlc9mi2A1RA03Qp7xSf0", "authDomain": "todo-app-angular-firebase.firebaseapp.com", "messagingSenderId": "457747990162", "measurementId": "G-MVLYWBKZCF" }))), 
    importProvidersFrom(provideFirestore(() => getFirestore()))]
};
