import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from './config/configuration';

@Module({
  imports: [
    ProductModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
