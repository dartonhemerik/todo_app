import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBLuUSG6XLdZhNwwysi8ndTw32boEnP9dM',
  authDomain: 'todo-app-218b8.firebaseapp.com',
  databaseURL: 'https://todo-app-218b8-default-rtdb.firebaseio.com',
  projectId: 'todo-app-218b8',
  storageBucket: 'todo-app-218b8.appspot.com',
  messagingSenderId: '508768634729',
  appId: '1:508768634729:web:4f789403f90a8791bf5ff8',
  measurementId: 'G-C2S1SD1YSF',
});

const db = firebaseApp.firestore();

export default db;
