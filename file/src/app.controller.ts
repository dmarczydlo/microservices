import { Controller, Get, HttpCode, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors/file.interceptor';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiBody } from '@nestjs/swagger/dist/decorators/api-body.decorator';
import { ApiConsumes } from '@nestjs/swagger/dist/decorators/api-consumes.decorator';
import { Readable } from 'stream';
import { AppService } from './app.service';
import { imageFileFilter } from './common/file.filter';
import { FileRequest } from './dtos/file.request';
import { fileBufferToFileResponse } from './mappers/file.response.mapper';

@ApiTags('File')
@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@HttpCode(200)
	@ApiOperation({ summary: 'Upload file' })
	@Post('file/upload')
	@ApiConsumes('multipart/form-data')
	@ApiBody({
		schema: {
			type: 'object',
			properties: {
				file: {
					type: 'string',
					format: 'binary'
				}
			}
		}
	})
	@UseInterceptors(
		FileInterceptor('file', {
			fileFilter: imageFileFilter,
			limits: { fileSize: +process.env.MAX_FILE_SIZE }
		})
	)
	async uploadFile(@UploadedFile('file') file: FileRequest) {
		return fileBufferToFileResponse(await this.appService.saveFile(file));
	}

	@ApiOperation({ summary: 'Get file' })
	@Get('file/:id')
	async getFile(@Param('id') id: string, @Res() res: Response) {
		const file = await this.appService.getFile(id);
		const buffer = file.buffer.buffer;
		const stream = new Readable();
		stream.push(buffer);
		stream.push(null);
		res.set({
			'Content-Type': file.mimetype
		});
		stream.pipe(res);
	}
}
