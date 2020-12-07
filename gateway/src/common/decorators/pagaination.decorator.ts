import { applyDecorators, Type } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { PaginatedDto } from 'src/user/dto/pagination.response';

export const ApiPaginatedResponse = <TModel extends Type<any>>(model: TModel) => {
	return applyDecorators(
		ApiOkResponse({
			schema: {
				allOf: [
					{ $ref: getSchemaPath(PaginatedDto) },
					{
						properties: {
							results: {
								type: 'array',
								items: { $ref: getSchemaPath(model) }
							}
						}
					}
				]
			}
		})
	);
};
