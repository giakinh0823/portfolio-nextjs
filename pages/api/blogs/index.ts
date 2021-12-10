import { initializeApp } from "firebase/app";
import type { NextApiRequest, NextApiResponse } from "next";
import { firebaseConfig } from "../../../constants/common";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

initializeApp(firebaseConfig);

const storage = getStorage();
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
    try {
      await addDoc(collection(db, "blogs"), req.body);
      return res.status(200).json({ name: "Success" });
    } catch (error) {
      return res.status(400).json({ name: "Error" });
    }
  }

  const response = await fetch(
    `https://api-gateway.fullstack.edu.vn/api/blog-posts?page=${req.query.page}`
  );
  const responseJSON = await response.json();

  res.status(200).json(responseJSON);
}
