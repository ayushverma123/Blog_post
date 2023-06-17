import { Multer } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './create-blog.dto';
import { IBlog } from './blog.schema';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get('getall')
  async getAllBlogs(): Promise<IBlog[]> {
    return this.blogService.getAllBlogs();
  }

  @Get('getbyid/:id')
  async getBlogById(@Param('id') id: string): Promise<IBlog | null> {
    return this.blogService.getBlogById(id);
  }

   
  @Post('create')
  async createBlog(@Body() createBlogDto: CreateBlogDto): Promise<IBlog> {
    return this.blogService.createBlog(createBlogDto);
  }
 
  
  @Post('create-with-image')
  @UseInterceptors(FileInterceptor('image'))
  async createBlogImage(
    @Body() createBlogDto: CreateBlogDto,
    @UploadedFile() image: Multer.File,
  ): Promise<IBlog> {
    // Access the raw data from the request body
    const { category, title, description, content, blog_date, meta_title, meta_desc, meta_keyword } = createBlogDto;

    // Create a new blog post with the raw data and the image filename
    const newBlog: CreateBlogDto = {
      category,
      title,
      description,
      content,
      blog_date,
      meta_title,
      meta_desc,
      meta_keyword,
      image: image?.filename,
    };

    return this.blogService.createBlog(newBlog);
  }


  @Put('updatebyid/:id')
  async updateBlog(
    @Param('id') id: string,
    @Body() updateBlogDto: CreateBlogDto,
  ): Promise<IBlog | null> {
    return this.blogService.updateBlog(id, updateBlogDto);
  }

  @Delete('deletebyid/:id')
  async deleteBlog(@Param('id') id: string): Promise<IBlog | null> {
    return this.blogService.deleteBlog(id);
  }
}