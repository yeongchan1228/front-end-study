const PostWriteForm = () => {
  return (
    <div className="post-write">
      <h4>글 작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" type="text" placeholder="글제목" />
        <input name="content" type="textarea" placeholder="글내용" />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default PostWriteForm;
