import { Sequelize } from 'sequelize-typescript';
import { User } from '../entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'pramod_role',
        password: '1234567890',
        database: 'api',
      });
      // sequelize.addModels(["../**/*.entity.ts"]);
      sequelize.addModels([User]);
      // await sequelize.sync();
      return sequelize;
    },
  },
];
