import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  category: string;
  title: string;
  description: string;
  content: string;
  blog_date: Date;
  meta_title: string;
  meta_desc: string;
  meta_keyword: string;
}

 export const BlogSchema: Schema = new Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  blog_date: { type: Date, required: true},
  meta_title: { type: String, required: true },
  meta_desc: { type: String, required: true },
  meta_keyword: { type: String, required: true },
});

export default BlogSchema;