import { connectDB } from "@/util/database";
import { PostDataType } from "@/constants/types/post-types";

const { NEXT_PUBLIC_DATABASE_NAME: MONGO_DB_NAME } = process.env;

export default async function handler(req, res) {
  if (req.method === "GET") {
    const db = (await connectDB).db(MONGO_DB_NAME);
    let result: PostDataType[] = await db.collection("post").find().toArray();
    res.status(200).json(result);
  }
}
