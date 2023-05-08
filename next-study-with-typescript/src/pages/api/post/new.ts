import { CreatePostType } from "@/constants/types/post-types";
import { connectDB } from "@/util/database";

const { NEXT_PUBLIC_DATABASE_NAME: MONGO_DB_NAME } = process.env;

export default async function handler(req, res) {
  const db = (await connectDB).db(MONGO_DB_NAME);
  if (req.method === "POST") {
    const data: CreatePostType = req.body;
    if (data.title === "" || data.content === "") {
      return res.status(400).json("Invalid");
    }
    data.createdDate = new Date().toISOString().split("T")[0];
    await db.collection("post").insertOne(data);
    // return res.status(200).json(data);
    // console.log("????");
    res.redirect(302, "/posts");
  }
}
