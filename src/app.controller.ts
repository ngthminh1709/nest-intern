import { Controller, Get, Render, Req, Res, Post, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'helo' };
  }

  @Get('/db')
  getDb(): any {
    return this.appService.getDb();
  }

  @Post()
  searchData(@Body() body: any, @Req() req: Request, @Res() res: Response) {
    return this.appService.searchData(body, req, res);
  }
}
