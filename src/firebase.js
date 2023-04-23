// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getFirestore} from "firebase/firestore";
// import dotenv

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain:`${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket:`${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_SENDER_ID}`,
  appId:`${process.env.REACT_APP_FIREBASE_APP_ID}`,
  measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =  getAuth(app);

export const db = getFirestore(app);


// ------
// export const firestore = firebase.firestore();
// export const createUserDocument = async (user,additionalData) => {
//   if(!user)return;
// const userRef = firestore.doc(`users/${user.uid}`);
// const snapshot = await userRef.get();
// if(!snapshot.exists){
//   const {displayname} = additionalData;
//   const {email} = user;
//   try{
//     useRef.set({displayname,
//     email,
//     createdAt: new Date(),
//   })
//   }catch(error){
//       console.log('error in creating user',error)
//   }
// }
// };