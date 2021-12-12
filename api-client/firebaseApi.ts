import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  where,
  query,
  addDoc,
  orderBy,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { Param } from "../models/param";
import { firebaseConfig } from "../constants/common";
import { v4 as uuidv4 } from "uuid";
import slugify from "slugify";


initializeApp(firebaseConfig);

const storage = getStorage();
const db = getFirestore();

export const getPost = async (param: Param) => {
  const number = param?.limit || 6;
  const docRef = await query(collection(db, "blogs"), limit(number), orderBy("time", "desc"));

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

export const upPost = async (data: any) => {
  const id = uuidv4();
  await addDoc(collection(db, "blogs"), {
    ...data,
    slug: slugify(data.title) + "-" + id,
    id,
  });
};

export const getCategorys = async () => {
  const docRef = await query(collection(db, "category"));

  const docSnap = await getDocs(docRef);
  const data: any[] = [];
  docSnap.forEach((doc: any) => {
    data.push({ ...doc.data() });
  });
  return data;
};
