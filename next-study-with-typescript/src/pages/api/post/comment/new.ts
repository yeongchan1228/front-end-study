import { connectDB } from "@/util/database";
import { CommentType } from "@/constants/types/post-types";
import { ObjectId } from "mongodb";

const { NEXT_PUBLIC_DATABASE_NAME: MONGO_DB_NAME } = process.env;

export default async function handler(req, res) {
  console.log(req.method);
  if (req.method === "POST") {
    const db = (await connectDB).db(MONGO_DB_NAME);
    const commentBody: CommentType = JSON.parse(req.body);
    commentBody.parent = new ObjectId(commentBody.parent);
    await db.collection("comment").insertOne(commentBody);
    res.status(200).json("OK!!");
  }
}
