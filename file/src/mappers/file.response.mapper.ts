import { plainToClass } from 'class-transformer';
import { FileResponse } from 'src/dtos/file.response';
import { FileDocument } from 'src/schemas/file.schema';

export const fileBufferToFileResponse = (fileBuffer: FileDocument) => {
	return {
		id: fileBuffer._id,
		...plainToClass(FileResponse, fileBuffer),
		url: `${process.env.HOST_URL}/file/${fileBuffer._id}`
	};
};
