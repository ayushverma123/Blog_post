import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
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

  @Get('/getbyid/:id')
  async getBlogById(@Param('id') id: string): Promise<IBlog | null> {
    return this.blogService.getBlogById(id);
  }

  @Post('create')
  async createBlog(@Body() createBlogDto: CreateBlogDto): Promise<IBlog> {
    return this.blogService.createBlog(createBlogDto);
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