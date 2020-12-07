import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserResponse {
	@Expose() id: string;
	@Expose() name: string;
	@Expose() surname: string;
	@Expose() SSN: string;
	@Expose() phone: string;
}
