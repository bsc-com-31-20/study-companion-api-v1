import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlashcardsController } from './flashcards.controller';
import { FlashcardsService } from './flashcards.service';
import { Flashcards } from './flashcards';

@Module({
  controllers: [FlashcardsController],
  providers: [FlashcardsService],
  exports: [FlashcardsService]
})

@Module({
  imports: [TypeOrmModule.forFeature([Flashcards])],
  controllers: [FlashcardsController, AppController],
  providers: [FlashcardsService, AppController],
})
export class FlashcardsModule {}
