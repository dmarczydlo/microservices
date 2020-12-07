import { plainToClass } from 'class-transformer';
import { UserResponse } from 'src/models/user.model';
import { UserDocument } from 'src/schemas/user.schema';

export const usersDbToUsersResponse = (users: UserDocument[]): UserResponse[] => {
	return users.map((user: UserDocument) => {
		return plainToClass(UserResponse, Object.assign(user, { id: user._id }));
	});
};
