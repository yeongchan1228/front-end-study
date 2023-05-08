"use client";

import { PostDataListType, PostDataType } from "@/constants/types/post-types";
import DetailLink from "@/components/common/link/DetailLink";

export default function PostListForm({ data }: PostDataListType) {
  return (
    <div>
      {data.map((post: PostDataType) => {
        return (
          <div className="list-item" key={post._id}>
            <DetailLink
              content={post.title}
              uri={`/detail/${post._id}`}
            ></DetailLink>
            <p>{post.createdDate}</p>
            <span
              onClick={(e: any) => {
                fetch(`api/post/delete?id=${post._id}`, {
                  method: "DELETE",
                  body: post._id.toString(),
                })
                  .then((res) => {
                    if (res.status === 200) {
                      return res.json();
                    } else {
                      console.log("실패!!");
                    }
                  })
                  .then(() => {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  })
                  .catch((error) => {});
              }}
            >
              ❌
            </span>
          </div>
        );
      })}
    </div>
  );
}
