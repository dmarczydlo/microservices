import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class PaginationRequest {
	@ApiProperty({ type: 'number', required: true })
	@IsNumber()
	limit: number;

	@ApiProperty({ type: 'number', required: false })
	@IsNumber()
	@IsOptional()
	offset?: number;
}
