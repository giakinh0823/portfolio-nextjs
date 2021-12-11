import type { NextApiRequest, NextApiResponse } from "next";
import "firebase/auth";
import {
    addDoc,
    collection,
    getDoc,
    getDocs,
    getFirestore,
    orderBy,
    query,
    Timestamp,
    where
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../constants/common";

initializeApp(firebaseConfig);

const db = getFirestore();

type Data =
  | {
      data: any[];
    }
  | { name: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    return res.status(404).json({ name: "method not supported" });
  }

  const docRef = await query(
    collection(db, "category"),
    orderBy("id", "asc")
  );

  const docSnap = await getDocs(docRef);
  const data: any[] = [];
  docSnap.forEach((doc: any) => {
    data.push({...doc.data() });
  });
  
  res.status(200).json({data: data});
}
