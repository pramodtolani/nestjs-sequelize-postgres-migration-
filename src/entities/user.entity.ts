import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @Column
  id: number;
  
  @Column
  username: string;

  @Column
  email: string;

  @Column
  fullname: string;

  @Column
  password: string;
}
