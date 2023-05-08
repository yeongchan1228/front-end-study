import { PostDataDetailType } from "@/constants/types/post-types";
import Link from "next/link";
import PostComment from "@/components/domain/post/post-comment-form";

export default function PostDetailForm({ data }: PostDataDetailType) {
  return (
    <div>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        href={`/posts/edit/${data._id}`}
      >
        수정하기
      </Link>
      <h4 style={{ fontSize: "30px" }}>상세페이지</h4>
      <h4>{data.title}</h4>
      <p>{data.content}</p>
      <PostComment
        parentId={data._id.toString()}
        title={data.title}
      ></PostComment>
    </div>
  );
}
