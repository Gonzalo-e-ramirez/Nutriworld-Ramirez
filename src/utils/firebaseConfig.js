// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzZWCsLataGgwECRd00aAgGTL86JXezWY",
  authDomain: "nutriworld-c947a.firebaseapp.com",
  projectId: "nutriworld-c947a",
  storageBucket: "nutriworld-c947a.appspot.com",
  messagingSenderId: "94370223916",
  appId: "1:94370223916:web:e8764af411e35850373e89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreFetch = async (idCategory) =>{
  let q;
  if(idCategory) {
    q = query(collection(db, "products"), where('categoryId', '==', idCategory))
  } else {
    q = query(collection(db, "products"))
  }
  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
  return dataFromFirestore
}

export const firestoreOneFetch = async (item) => {
  const docRef = doc(db, "products", item);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {id: docSnap.id, ...docSnap.data()};
  } else {
    console.log("No such document!");
  }
}

export const db = getFirestore(app);