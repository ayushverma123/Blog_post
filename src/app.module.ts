import { BlogSchema } from './blog.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateBlogDto } from './create-blog.dto';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://ayushv657:gkczp9LJXpkYnN7u@cluster0.stthbi5.mongodb.net/mydatabase?retryWrites=true&w=majority"),
  MongooseModule.forFeature([{ name: 'Blog', schema: BlogSchema  }]),],
  controllers: [AppController, BlogController],
  providers: [AppService, BlogService]
})
export class AppModule {}
