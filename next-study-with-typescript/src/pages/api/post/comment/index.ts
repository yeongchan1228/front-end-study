import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const { NEXT_PUBLIC_DATABASE_NAME: MONGO_DB_NAME } = process.env;

export default async function handler(req, res) {
  if (req.method === "GET") {
    const db = (await connectDB).db(MONGO_DB_NAME);
    let parentId: string = req.query.id;
    let data = await db
      .collection("comment")
      .find({
        // 조건
        parent: new ObjectId(parentId),
      })
      .toArray();

    res.status(200).json(data);
  }
}
