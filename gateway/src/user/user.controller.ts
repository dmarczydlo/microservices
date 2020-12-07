import { Body, Controller, Get, HttpCode, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiPaginatedResponse } from 'src/common/decorators/pagaination.decorator';
import { PaginationRequest } from './dto/pagination.request';
import { PaginatedDto } from './dto/pagination.response';
import { UserRequest } from './dto/user.request';
import { UserResponse } from './dto/user.response';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
@ApiExtraModels(UserResponse, PaginatedDto)
export class UserController {
	constructor(private readonly userService: UserService) {}

	@HttpCode(200)
	@Get()
	@ApiOperation({ summary: 'Get list of users' })
	@ApiPaginatedResponse(UserResponse)
	async getUsers(@Query() params: PaginationRequest) {
		params = {
			limit: +params.limit,
			offset: params.offset ? +params.offset : undefined
		};

		return this.userService.getUsers(params);
	}

	@HttpCode(201)
	@Post()
	async addUser(@Body() data: UserRequest) {
		await this.userService.addUser(data);
		return {};
	}
}
