import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfdu37cOCt0Aq4DWUOkVO6cSdb4R3_Cx0",
  authDomain: "crwn-clothes-db-e98c4.firebaseapp.com",
  projectId: "crwn-clothes-db-e98c4",
  storageBucket: "crwn-clothes-db-e98c4.appspot.com",
  messagingSenderId: "699896034185",
  appId: "1:699896034185:web:888361a292d935b7366758",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserFomAuth = async (
  authData,
  additionalInformation = {}
) => {
  if (!authData) return;

  const userDocRef = doc(db, "users", authData.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = authData;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(`Something went wrong, user didn't create: ${error}`);
    }

    return userDocRef;
  }
};

export const createUserWithEmailAndPasswordForm = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPasswordForm = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
