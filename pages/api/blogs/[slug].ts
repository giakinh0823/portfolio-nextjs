import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore, query,
  where
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import type { NextApiRequest, NextApiResponse } from "next";
import { firebaseConfig } from "../../../constants/common";

initializeApp(firebaseConfig);

const storage = getStorage();
const db = getFirestore();

type Data =
  | {
      data: any;
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
    collection(db, "blogs"),
    where("slug", "==", req.query.slug)
  );

  const docSnap = await getDocs(docRef);
  const data: any[] = [];
  docSnap.forEach((doc: any) => {
    data.push({ ...doc.data() });
  });

  res.status(200).json({ data: data[0] });
}
