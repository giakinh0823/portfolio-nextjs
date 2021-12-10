import type { NextApiRequest, NextApiResponse } from "next";

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
    "https://api-gateway.fullstack.edu.vn/api/topics"
  );
  const responseJSON = await response.json();
  res.status(200).json(responseJSON);
}
