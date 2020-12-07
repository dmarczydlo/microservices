import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configSchema } from './common/config.validation';
import { File, FileSchema } from './schemas/file.schema';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			validationSchema: configSchema
		}),
		MongooseModule.forRoot(
			`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env
				.MONGO_URL}?authSource=admin`
		),
		MongooseModule.forFeature([ { name: File.name, schema: FileSchema } ])
	],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
