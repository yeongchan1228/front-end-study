"use client";

import { useEffect, useState } from "react";
import {
  CommentType,
  PostCommentPropsType,
} from "@/constants/types/post-types";

export default function PostComment({ parentId, title }: PostCommentPropsType) {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch(`/api/post/comment?id=${parentId}`)
      .then((res) => res.json())
      .then((data) => {
        setCommentList(data);
      });
  }, []);

  return (
    <div>
      <div>
        {commentList.map((data) => {
          return (
            <div key={data._id}>
              <p>{data.content}</p>
            </div>
          );
        })}
      </div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={async (e) => {
          const commentData: CommentType = {
            content: comment,
            parent: parentId,
            title: title,
          };
          const result = await fetch("/api/post/comment/new", {
            method: "POST",
            body: JSON.stringify(commentData),
          });
        }}
      >
        댓글 전송
      </button>
    </div>
  );
}
