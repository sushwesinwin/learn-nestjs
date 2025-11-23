import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private cats: Cat[] = [
    { name: 'cat1', age: 1, breed: 'breed1' },
    { name: 'cat2', age: 2, breed: 'breed2' },
    { name: 'cat3', age: 3, breed: 'breed3' },
  ];

  getAll() {
    return this.cats;
  }

  getById(id: number) {
    return this.cats[id];
  }

  create(cat: Cat) {
    this.cats.push(cat);
    return this.cats;
  }

  update(id: number, cat: Cat) {
    this.cats[id] = cat;
    return this.cats;
  }

  delete(id: number) {
    this.cats.splice(id, 1);
    return this.cats;
  }
}
