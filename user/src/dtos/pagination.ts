import { IsNumber, IsOptional } from 'class-validator';

export class Pagination {
	@IsNumber() limit: number;

	@IsNumber()
	@IsOptional()
	offset?: number;
}
