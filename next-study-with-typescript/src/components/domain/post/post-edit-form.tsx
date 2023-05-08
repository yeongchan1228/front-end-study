import { PostDataDetailType } from "@/constants/types/post-types";

const PostEditForm = ({ data }: PostDataDetailType) => {
  console.log(data);
  return (
    <div className="post-write">
      <h4>글 수정</h4>
      <form action="/api/post/edit" method="POST">
        <input
          name="title"
          type="text"
          placeholder="글제목"
          defaultValue={data.title}
        />
        <input
          name="content"
          type="textarea"
          placeholder="글내용"
          defaultValue={data.content}
        />
        <input name="_id" type="hidden" defaultValue={data._id.toString()} />
        <button type="submit">수정</button>
      </form>
    </div>
  );
};

export default PostEditForm;
