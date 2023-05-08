import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";

const { NEXT_PUBLIC_DATABASE_NAME: MONGO_DB_NAME } = process.env;

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const db = (await connectDB).db(MONGO_DB_NAME);
    const result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.query.id) });
    console.log(result);
    res.status(200).json("ok!!");
  }
}
