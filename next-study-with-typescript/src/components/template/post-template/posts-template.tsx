import { PostDataListType } from "@/constants/types/post-types";
import { PostListForm } from "@/components/domain/post";
import DetailLink from "@/components/common/link/DetailLink";

const PostTemplate = ({ data }: PostDataListType) => {
  return (
    <div>
      <DetailLink content="글 작성하기" uri={`/write`}></DetailLink>
      {/*<Link*/}
      {/*  href={`/posts/detail/${post._id}`}*/}
      {/*  style={{ textDecoration: "none", color: "black" }}*/}
      {/*>*/}
      {/*  <h4>{post.title}</h4>*/}
      {/*</Link>*/}
      <PostListForm data={data}></PostListForm>
    </div>
  );
};

export default PostTemplate;
