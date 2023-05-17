import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flashcards } from './flashcards';

@Injectable()
export class FlashcardsService {
  
  constructor(
    @InjectRepository(Flashcards)
    private readonly flashcardsRepository: Repository<Flashcards>,
  ) {}

  //search method
  async findOneByCreator(creator: string): Promise<Flashcards | undefined> {
    return this.flashcardsRepository.findOne({ where: { creator } });
  }


  //flashcards creation method
  async createFlashcard(flashcards: Flashcards): Promise<Flashcards> {
    return await this.flashcardsRepository.save(flashcards);
  }

  //updating cards
  async updateFlashcard(id: number, data: Partial<Flashcards>): Promise<void> {
    await this.flashcardsRepository.update(id, data);
  }

  //deleting available cards
  async deleteFlashcard(id: number): Promise<void> {
    await this.flashcardsRepository.delete(id);
  }
}

