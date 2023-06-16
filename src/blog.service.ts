import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBlog } from './blog.schema';
import { CreateBlogDto } from './create-blog.dto'; 

@Injectable()
export class BlogService {
  constructor(@InjectModel('Blog') private readonly blogModel: Model<IBlog>) {}

  async createBlog(createBlogDto: CreateBlogDto): Promise<IBlog> {
    const createdBlog = new this.blogModel(createBlogDto);
    return createdBlog.save();
  }

  async getAllBlogs(): Promise<IBlog[]> {
    return this.blogModel.find().exec();
  }

  async getBlogById(id: string): Promise<IBlog | null> {
    return this.blogModel.findById(id).exec();
  }

  async updateBlog(id: string, updateBlogDto: CreateBlogDto): Promise<IBlog | null> {
    return this.blogModel.findByIdAndUpdate(id, updateBlogDto, { new: true }).exec();
  }

  async deleteBlog(id: string): Promise<IBlog | null> {
    return this.blogModel.findByIdAndDelete(id).exec();
  }
}