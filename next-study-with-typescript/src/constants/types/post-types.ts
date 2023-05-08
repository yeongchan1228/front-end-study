import { ObjectId } from "mongodb";

export interface PostDataType {
  _id: string;
  title: string;
  content: string;
  createdDate: string;
}

export interface PostDataListType {
  data: PostDataType[];
}

export interface PostDataDetailType {
  data: PostDataType;
}

export interface PostParamType {
  params: { id: string };
}

export interface CreatePostType {
  _id: string;
  title: string;
  content: string;
  createdDate: string;
}

export interface CommentType {
  content: string;
  parent: string | ObjectId;
  title: string;
}

export interface PostCommentPropsType {
  parentId: string;
  title: string;
}
