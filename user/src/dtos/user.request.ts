import { IsISSN, IsPhoneNumber, IsString, Length } from 'class-validator';

export class UserRequest {
	@IsString()
	@Length(3, 100)
	name: string;
	@IsString()
	@Length(3, 100)
	surname: string;

	@IsString()
	@IsISSN()
	SSN: string;

	@IsPhoneNumber(null)
	phone: string;
}
