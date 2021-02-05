import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configSchema } from './common/config.validation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectRepository } from './project.repository';
import { ProjectEntity } from './entity/project.entity';
import { TypeOrmConfigService } from './config/dbConfigService';
import { get } from 'config';

const databaseConfig: any = { ...get('database') };
if (databaseConfig.enable_ssl === false || databaseConfig.enable_ssl === 'false') {
	delete databaseConfig.ssl;
}

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			validationSchema: configSchema
		}),
		TypeOrmModule.forFeature([ ProjectEntity, ProjectRepository ]),
		TypeOrmModule.forRoot({
			...databaseConfig,
			entities: [ __dirname + '/**/*.entity{.ts,.js}' ],
			migrationsRun: false,
			migrations: [ __dirname + '/migrations/*{.ts,.js}' ]
		})
	],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
