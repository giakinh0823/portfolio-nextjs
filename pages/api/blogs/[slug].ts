import { initializeApp } from "firebase/app";
import type { NextApiRequest, NextApiResponse } from "next";
import { firebaseConfig } from "../../../constants/common";

initializeApp(firebaseConfig);

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

  const response = await fetch(
    `https://api-gateway.fullstack.edu.vn/api/blog-posts/${req.query.slug}`
  );
  const responseJSON = await response.json();
  res.status(200).json(responseJSON);
}
