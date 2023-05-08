import PostTemplate from "@/components/template/post-template";
import { PostDataType } from "@/constants/types/post-types";
import { connectDB } from "@/util/database";

const { NEXT_PUBLIC_DATABASE_NAME: MONGO_DB_NAME } = process.env;

export const dynamic = "force-dynamic";
// export const revalidate = 60; // 캐싱 기능 제공
export default async function PostPage() {
  const db = (await connectDB).db(MONGO_DB_NAME);
  let result: PostDataType[] = await db.collection("post").find().toArray();
  result.map((data) => (data._id = data._id.toString()));
  return <PostTemplate data={result}></PostTemplate>;
}
