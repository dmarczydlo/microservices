export class PaginationModel<TData> {
	total: number;
	limit: number;
	offset: number;
	results: TData[];
}
