import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbconfig } from './config/db.config';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbconfig),
    ApiModule,
    TestModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
