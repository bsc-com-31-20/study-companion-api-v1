import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
  @ApiProperty({example: '1'})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({example: 'MAT121'})
  @Column()
  courseCode: string;
  
  @ApiProperty({example: 'Calculus'})
  @Column()
  courseName: string;

}
