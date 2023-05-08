import { PostDetailForm } from "@/components/domain/post";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { PostDataType, PostParamType } from "@/constants/types/post-types";

const { NEXT_PUBLIC_DATABASE_NAME: MONGO_DB_NAME } = process.env;

export default async function PostDetail({ params }: PostParamType) {
  const db = (await connectDB).db(MONGO_DB_NAME);
  const result: PostDataType = await db
    .collection("post")
    .findOne({ _id: new ObjectId(params.id) });
  return <PostDetailForm data={result}></PostDetailForm>;
}
