import { ObjectId } from "mongoose";

export type TServices = {
  title: string;
  sub_title: string;
  description: string;
  images: string[];
  category:ObjectId;
  meta_title: string;
  meta_description: string;
  meta_keywords: string[];
};

export type TCategory = {
  name: string;
};
