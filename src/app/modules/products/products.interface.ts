import { ObjectId } from "mongoose";


export type TProduct ={
    title:string,
    images:string[],
    category:ObjectId,
    meta_title:string,
    meta_description:string,
    meta_keywords:string[]
    
}
export type TProductCategory = {
    name: string;
  };
  