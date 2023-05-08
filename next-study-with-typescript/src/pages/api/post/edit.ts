import { CreatePostType } from "@/constants/types/post-types";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const { NEXT_PUBLIC_DATABASE_NAME: MONGO_DB_NAME } = process.env;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data: CreatePostType = req.body;
    const db = (await connectDB).db(MONGO_DB_NAME);
    await db
      .collection("post")
      .updateOne(
        { _id: new ObjectId(data._id) },
        { $set: { title: data.title, content: data.content } }
      );
    // return res.status(200).json(data);
    res.redirect(302, "/posts");
  }
}
