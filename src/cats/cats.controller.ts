import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create.cat.dto';
import { UpdateCatDto } from './dto/update.cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);

    return this.catsService.getById(id);
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
  
  @Put(':id')
  async update(
      @Param('id', ParseIntPipe) id: number, 
      @Body() updateCatDto: UpdateCatDto
    ) {
    this.catsService.update(id, updateCatDto);
    return this.catsService.getAll()
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.delete(id);
  }

}
