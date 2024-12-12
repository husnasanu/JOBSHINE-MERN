import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbOme7YBM7RzKsTx6yBK8EBPJI9Fu3EAQ",
  authDomain: "jobshine-d2f5e.firebaseapp.com",
  projectId: "jobshine-d2f5e",
  storageBucket: "jobshine-d2f5e.appspot.com",
  messagingSenderId: "948965817244",
  appId: "1:948965817244:web:551e4ac41c85ff06e36659",
  measurementId: "G-B4KPCF9R87"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export {auth,provider}
