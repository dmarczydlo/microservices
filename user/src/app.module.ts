import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { configSchema } from './common/config.validation';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';

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
		MongooseModule.forFeature([ { name: User.name, schema: UserSchema } ])
	],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
