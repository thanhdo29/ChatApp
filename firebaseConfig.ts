import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth,getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAxsxJp8wQamtFsjB3UzJD-bQBWl_L2Zu8",
  authDomain: "chatapplication-e8e99.firebaseapp.com",
  projectId: "chatapplication-e8e99",
  storageBucket: "chatapplication-e8e99.appspot.com",
  messagingSenderId: "925482936039",
  appId: "1:925482936039:web:92c345ab861ea9377c6442",
  measurementId: "G-T4K1Q91RSN"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Auth với cấu hình AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Khởi tạo Firestore
const db = getFirestore(app);

export { app, auth, db };
