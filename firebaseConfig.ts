import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/firestore';

import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: Constants?.manifest?.extra?.firebaseApiKey,
  authDomain: Constants?.manifest?.extra?.firebaseAuthDomain,
  projectId: Constants?.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants?.manifest?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants?.manifest?.extra?.firebaseMessagingSenderId,
  appId: Constants?.manifest?.extra?.firebaseAppId,
  measurementId: Constants?.manifest?.extra?.firebaseMeasurementId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;
