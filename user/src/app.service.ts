import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pagination } from './dtos/pagination';
import { UserRequest } from './dtos/user.request';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class AppService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async getUsersList(data: Pagination) {
		const skip = (data.offset - 1) * data.limit;
		const users = await this.userModel.find().limit(data.limit).skip(data.offset > 1 ? skip : 0);

		const pagination = {
			total: users.length,
			limit: +data.limit,
			offset: +data.offset,
			results: users
		};

		return pagination;
	}

	addUser(data: UserRequest) {
		const newUser = new this.userModel(data);
		return newUser.save();
	}
}
