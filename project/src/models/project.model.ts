export class ProjectReqest {
	name: string;
	description: string;
}

export class ProjectResponse extends ProjectReqest {
	id: string;
	createdAt: string;
	updatedAt: string;
}
