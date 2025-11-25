import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatEntity } from './entity/cat.entity';
import { Cat } from './interfaces/cat.interface';
import { UpdateCatDto } from './dto/update.cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private catsRepository: Repository<CatEntity>,
  ) {}

  // Get all cats
  async getAll(): Promise<CatEntity[]> {
    return await this.catsRepository.find();
  }

  // Get one cat by id
  async getById(id: number): Promise<CatEntity | null> {
    return await this.catsRepository.findOne({ where: { id } });
  }

  // Create a new cat
  async create(cat: Cat): Promise<CatEntity> {
    const newCat = this.catsRepository.create(cat);
    return await this.catsRepository.save(newCat);
  }

  // Partial update
  async update(id: number, updateCatDto: UpdateCatDto): Promise<CatEntity | null> {
    await this.catsRepository.update(id, updateCatDto);
    return this.getById(id); // return updated cat
  }

  // Delete cat
  async delete(id: number): Promise<void> {
    await this.catsRepository.delete(id);
  }
}
