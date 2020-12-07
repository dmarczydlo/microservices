import { ApiProperty } from '@nestjs/swagger';
import { IsISSN, IsPhoneNumber, IsString, Length } from 'class-validator';

export class UserRequest {
	@ApiProperty({ type: 'string', required: true })
	@IsString()
	@Length(3, 100)
	name: string;

	@ApiProperty({ type: 'string', required: true })
	@IsString()
	@Length(3, 100)
	surname: string;

	@ApiProperty({ type: 'string', required: true })
	@IsString()
	@IsISSN()
	SSN: string;

	@ApiProperty({ type: 'string', required: true })
	@IsPhoneNumber(null)
	phone: string;
}
