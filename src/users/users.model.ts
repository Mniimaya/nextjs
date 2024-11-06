import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UseCreationAttr {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UseCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @ApiProperty({ example: '1', description: 'id пользователя' })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  @ApiProperty({ example: 'user@email.com', description: 'email пользователя' })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty({ example: '12345678', description: 'password пользователя' })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  @ApiProperty({ example: true, description: 'стутус бана пользователя' })
  banned: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  @ApiProperty({ example: 'Причнина', description: 'Причина' })
  banReason: string;
}
