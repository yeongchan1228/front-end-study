import { PostEditForm } from "@/components/domain/post";
import { PostDataType, PostParamType } from "@/constants/types/post-types";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const { NEXT_PUBLIC_DATABASE_NAME: MONGO_DB_NAME } = process.env;

export default async function PostEdit({ params }: PostParamType) {
  const db = (await connectDB).db(MONGO_DB_NAME);
  const result: PostDataType = await db
    .collection("post")
    .findOne({ _id: new ObjectId(params.id) });

  return <PostEditForm data={result}></PostEditForm>;
}
