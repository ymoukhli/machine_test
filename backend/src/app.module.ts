import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MachinesModule } from './machines/machines.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Machine } from './machines/entities/machine.entity';
import { MachineProduction } from './machines/entities/machineProduction.entity';

@Module({
  imports: [MachinesModule, ConfigModule.forRoot(
    {
      envFilePath: ['../.env']
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      database: 'db',
      password: 'password',
      // port: +process.env.PORT,
      // username: process.env.DB_USER,
      // database: process.env.DATABASSE,
      // password: process.env.DB_PASSWORD,
      synchronize: true,
      entities: [Machine, MachineProduction]

    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
