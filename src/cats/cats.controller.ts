import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  private cats: string[] = ['cat1', 'cat2', 'cat3'];

  @Get()
  findAll(): string[] {
    return this.cats;
  }

  // Param Object
  /*  
    @Get(':id')
    findOne(@Param() param: any): string {
        console.log(param);

        const id = param.id;
        return this.cats[id];
    }
*/
  // Specific Param
  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(typeof id);

    return this.cats[id];
  }

}
