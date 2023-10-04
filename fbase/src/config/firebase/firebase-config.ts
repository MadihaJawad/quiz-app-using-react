// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5EA0KFSZTfoZ2saTGqCqRGbBK-96ZBG8",
  authDomain: "todo-app-cc169.firebaseapp.com",
  databaseURL: "https://todo-app-cc169-default-rtdb.firebaseio.com",
  projectId: "todo-app-cc169",
  storageBucket: "todo-app-cc169.appspot.com",
  messagingSenderId: "1050939494031",
  appId: "1:1050939494031:web:c715f6da5dc350d0a82afa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);