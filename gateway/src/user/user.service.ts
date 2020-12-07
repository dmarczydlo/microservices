import { Injectable } from '@nestjs/common';
import { ClientOptions, ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { PaginationRequest } from './dto/pagination.request';
import { UserRequest } from './dto/user.request';

@Injectable()
export class UserService {
	private client: ClientProxy;

	constructor() {
		const clientOptions: ClientOptions = {
			transport: Transport.TCP,
			options: {
				port: +process.env.USER_SERVICE_PORT || 3010,
				host: process.env.USER_SERVICE_HOST || '0.0.0.0'
			}
		};

		this.client = ClientProxyFactory.create(clientOptions);
	}

	getUsers(payload: PaginationRequest) {
		const pattern = { cmd: 'users' };
		return this.client.send<number>(pattern, payload);
	}

	addUser(payload: UserRequest) {
		const pattern = { cmd: 'add_user' };
		return this.client.send<number>(pattern, payload);
	}
}
