import { Controller, Get, Post, Delete, Param, Patch } from '@nestjs/common';
import { AppService } from './app.service';

//Handles HTTP verbs
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

}
