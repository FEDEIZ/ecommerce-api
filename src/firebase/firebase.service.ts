import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

@Injectable()
export class FirebaseService {
  serviceAccount: string | ServiceAccount;
  constructor() {
    this.serviceAccount = require('../../firebase-sdkadmin.json');
  }

  initFirebase(): admin.app.App {
    return admin.initializeApp({
      credential: admin.credential.cert(this.serviceAccount),
      databaseURL: 'https://prueba-85fc2-default-rtdb.firebaseio.com',
    });
  }
}

// Add methods to interact with Firebase services using the admin SDK
