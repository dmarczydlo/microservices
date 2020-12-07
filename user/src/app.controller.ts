import { Controller, Logger, UsePipes } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Pagination } from './dtos/pagination';
import { UserRequest } from './dtos/user.request';
import { usersDbToUsersResponse } from './mappers/user.response.mapper';
import { PaginationModel } from './models/pagination';
import { UserResponse } from './models/user.model';
import { ValidationPipe } from './pipes/validation.pipe';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@UsePipes(new ValidationPipe())
	@MessagePattern({ cmd: 'users' })
	async getUsers(data: Pagination): Promise<PaginationModel<UserResponse>> {
		const users = await this.appService.getUsersList(data);
		let resultsData = [];

		if (users.results.length) {
			resultsData = usersDbToUsersResponse(users.results);
		}

		const result = { ...users, results: resultsData };
		return result;
	}

	@MessagePattern({ cmd: 'add_user' })
	async addUser(data: UserRequest) {
		const user = await this.appService.addUser(data);
		return user;
	}
}
