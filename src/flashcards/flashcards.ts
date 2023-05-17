import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flashcards {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  creator: string;
  
  @Column()
  courseName: string;

  @Column()
  chapter: string;

  @Column()
  question: string;

  @Column()
  answer: string;
}
