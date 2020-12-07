import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FileRequest } from './dtos/file.request';
import { File, FileDocument } from './schemas/file.schema';

@Injectable()
export class AppService {
	constructor(@InjectModel(File.name) private fileModel: Model<FileDocument>) {}

	saveFile(file: FileRequest) {
		if (!file) {
			throw new HttpException('Error uploading file', HttpStatus.BAD_REQUEST);
		}
		const newFile = new this.fileModel(file);
		return newFile.save();
	}

	async getFile(id: String) {
		const file = await this.fileModel.findById(id);
		if (!file) {
			throw new HttpException('File doesn not exist', HttpStatus.BAD_REQUEST);
		}
		return file;
	}
}
