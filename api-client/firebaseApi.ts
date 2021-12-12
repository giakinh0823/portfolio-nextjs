import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  where,
  query,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { Param } from "../models/param";
import { firebaseConfig } from "../constants/common";

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
  return data;
};

export const getPostBySlug = async (slug: any) => {
  const docRef = await query(
    collection(db, "blogs"),
    where("slug", "==", slug)
  );

  const docSnap = await getDocs(docRef);
  const data: any[] = [];
  docSnap.forEach((doc: any) => {
    data.push({ ...doc.data() });
  });
  return data[0];
};


export const getCategorys= async () => {
  const docRef = await query(
    collection(db, "category"),
  );

  const docSnap = await getDocs(docRef);
  const data: any[] = [];
  docSnap.forEach((doc: any) => {
    data.push({ ...doc.data() });
  });
  return data;
};

