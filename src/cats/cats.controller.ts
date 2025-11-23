import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): Cat[] {
    return this.catsService.getAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: any) {
    console.log(typeof id);

    return this.catsService.getById(id);
  }
    
  @Post()
  create(@Body() body: any) {
    return this.catsService.create(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: any, @Body() body: any) {
    return this.catsService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: any) {
    return this.catsService.delete(id);
  }

}
