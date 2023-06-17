import { IsString, IsDateString } from "class-validator";

export class CreateBlogDto

{

@IsString()
category: String;

@IsString()
title: string;

@IsString()
description: string;

@IsString()
content: string;

@IsDateString()
blog_date: Date;

@IsString()
meta_title: string;

@IsString()
meta_desc: string;

@IsString()
meta_keyword: string;

@IsString()
image: string;
}