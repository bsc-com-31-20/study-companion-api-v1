import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({example: 'John'})
  firstName: string;

  @Column()
  @ApiProperty({example: 'Doe'})
  lastName: string;

  @Column()
  @ApiProperty({example: 'johndoe@example.com'})
  email: string;

  @Column()
  @ApiProperty({example: 23})
  age: number;

  @Column()
  @ApiProperty({example: 'male'})
  gender: string;

  @Column()
  @ApiProperty({example: 'guessme1234'})
  password: string;
}
