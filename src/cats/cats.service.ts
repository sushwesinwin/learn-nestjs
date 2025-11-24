import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { UpdateCatDto } from './dto/update.cat.dto';

@Injectable()
export class CatsService {
  private cats: Cat[] = [
    { name: 'cat1', age: 1, breed: 'breed1' },
    { name: 'cat2', age: 2, breed: 'breed2' },
    { name: 'cat3', age: 3, breed: 'breed3' },
  ];

  getAll(): Cat[] {
    return this.cats;
  }

  getById(id: number): Cat {
    return this.cats[id];
  }

  create(cat: Cat): Cat[] {
    this.cats.push(cat);
    return this.cats;
  }

  // Partial update
  update(id: number, updateCatDto: UpdateCatDto) {
    this.cats[id] = {
      ...this.cats[id],
      ...updateCatDto,
    };
    return this.cats;
  }

  delete(id: number) {
    this.cats.splice(id, 1);
    return this.cats;
  }
}
