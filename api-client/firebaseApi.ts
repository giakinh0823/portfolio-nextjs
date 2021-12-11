import { initializeApp } from "firebase/app";
import {
    collection,
    getDocs,
    getFirestore,
    limit, query
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { Param } from '../models/param';
import { firebaseConfig } from '../constants/common';

initializeApp(firebaseConfig);

const storage = getStorage();
const db = getFirestore();


export const getPost = async (param: Param) => {
  const number = param?.limit || 6;
  const docRef = await query(collection(db, "blogs"), limit(number));

  const docSnap = await getDocs(docRef);
  const data: any[] = [];
  docSnap.forEach((doc: any) => {
    data.push({ ...doc.data() });
  });
  return data
}

 

