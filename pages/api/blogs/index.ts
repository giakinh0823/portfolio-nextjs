import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  limit, query
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import formidable from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";
import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";
import { firebaseConfig } from "../../../constants/common";

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
      const id = uuidv4();
      await addDoc(collection(db, "blogs"), {
        ...req.body,
        slug: slugify(req.body.title) + "-" + id,
        id,
      });
      return res.status(200).json({ name: "Success" });
    } catch (error) {
      return res.status(400).json({ name: "Error" });
    }
  }

  const number = req.query.limit ? Number.parseInt(req.query.limit as string) : 6;
  console.log(number);

  const docRef = await query(collection(db, "blogs"), limit(number));

  const docSnap = await getDocs(docRef);
  const data: any[] = [];
  docSnap.forEach((doc: any) => {
    data.push({ ...doc.data() });
  });

  // console.log(data);

  res.status(200).json({ data });
}

const post = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err: any, fields: any, files: any) {
    console.log(files);
  });
  return res.status(200).json({ name: "Success" });
};
