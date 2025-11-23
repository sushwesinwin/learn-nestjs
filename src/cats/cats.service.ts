import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private cats: string[] = ['cat1', 'cat2', 'cat3'];

  getAll() {
    return this.cats;
  }

  getById(id: number) {
    return this.cats[id];
  }

  create(cat: string) {
    this.cats.push(cat);
    return cat;
  }

  update(id: number, name: string) {
    this.cats[id] = name;
    return this.cats[id];
  }

  delete(id: number) {
    this.cats.splice(id, 1);
    return this.cats;
  }
}
