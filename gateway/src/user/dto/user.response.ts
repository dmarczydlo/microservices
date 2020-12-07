import { ApiProperty } from '@nestjs/swagger';
import { Expose, Exclude } from 'class-transformer';

@Exclude()
export class UserResponse {
	@Expose()
	@ApiProperty({ type: 'string', required: true })
	id: string;
	@Expose()
	@ApiProperty({ type: 'string', required: true })
	name: string;
	@Expose()
	@ApiProperty({ type: 'string', required: true })
	surname: string;
	@Expose()
	@ApiProperty({ type: 'string', required: true })
	SSN: string;
	@Expose()
	@ApiProperty({ type: 'string', required: true })
	phone: string;
}
