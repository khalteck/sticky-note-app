import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5PN9cC9eFaJE4ciiLtz823tI4iPJ8zaA",
  authDomain: "sticky-notes-app-3ca5b.firebaseapp.com",
  projectId: "sticky-notes-app-3ca5b",
  storageBucket: "sticky-notes-app-3ca5b.appspot.com",
  messagingSenderId: "164357657519",
  appId: "1:164357657519:web:7625f6d83e0b41f492d55a",
  measurementId: "G-ZRLR7MDW4M",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const createUserDocument = async (email, name) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      email: email,
      displayName: name,
      createdAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.error("Error adding document: ", err);
  }

  // if (!user) return;

  // const userRef = firestore.doc(`users/${user.uid}`);
  // const snapshot = await userRef.get();

  // if (!snapshot.exists) {
  //   const { email } = user;
  //   const { displayName } = additionalData;

  //   try {
  //     userRef.set({
  //       email,
  //       displayName,
  //       createdAt: new Date(),
  //     });
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }
};
