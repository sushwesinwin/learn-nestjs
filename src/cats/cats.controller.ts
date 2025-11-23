import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): string[] {
    return this.catsService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    console.log(typeof id);

    return this.catsService.getById(id);
  }
  
  @Post()
  create(@Body() body: any) {
    return this.catsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() name: string) {
    return this.catsService.update(id, name);
  }

  @Delete(':id')
  delete(@Param('id') id: any) {
    return this.catsService.delete(id);
  }

}
