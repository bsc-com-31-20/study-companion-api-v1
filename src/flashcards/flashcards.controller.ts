import { Body, Controller, Get, Delete, Param, ParseIntPipe, Put, UseGuards, Post } from '@nestjs/common';
import { RolesGuard } from 'src/Guards/roles.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Flashcards } from './flashcards';
import { FlashcardsService } from './flashcards.service';

@ApiTags('FLASHCARDS')
@Controller('/api/v1/flashcards')
@UseGuards(RolesGuard)
export class FlashcardsController {
    findAll(): any{
        throw new Error('Not found');
    }

constructor(private readonly flashcardsService: FlashcardsService){}

//get all cards created by a creator
@Get(':creator')
@ApiOperation({ summary: 'Get a flashcard by creator' })
async findUserById(@Param('creator') creator: string): Promise<Flashcards> {
  return await this.flashcardsService.findOneByCreator(creator);
}

//create a new flashcards
@Post()
@ApiOperation({ summary: 'Create a new flashcard' })
async createFlashcard(@Body() flashcardData: Flashcards): Promise<Flashcards> {
  return await this.flashcardsService.createFlashcard(flashcardData);
}

@Put(':id')
@ApiOperation({ summary: 'Change card details' })
async updateCard(@Param('id', ParseIntPipe) id: number, @Body() userData: Flashcards): Promise<void> {
  await this.flashcardsService.updateFlashcard(id, userData);
}

@Delete(':id')
@ApiOperation({ summary: 'Remove flashcard by ID' })
async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
  await this.flashcardsService.deleteFlashcard(id);
}

}