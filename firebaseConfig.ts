import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);

export default app;
