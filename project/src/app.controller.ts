import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { ProjectReqest } from './models/project.model';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@MessagePattern({ cmd: 'add_project' })
	async addProject(data: ProjectReqest) {
		const project = await this.appService.addProject(data);
		return project;
	}

	@MessagePattern({ cmd: 'projects' })
	async getProjects() {
		const projects = await this.appService.getProjects();
		return projects;
	}

	@MessagePattern({ cmd: 'project' })
	async getProject(id: string) {
		const project = await this.appService.getProject(id);
		return project;
	}

	@MessagePattern({ cmd: 'remove_project' })
	async removeProject(id: string) {
		return this.appService.removeProject(id);
	}
}
