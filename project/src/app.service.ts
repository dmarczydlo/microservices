import { Injectable } from '@nestjs/common';
import { ProjectRepository } from './project.repository';
import { ProjectReqest } from './models/project.model';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from './entity/project.entity';

@Injectable()
export class AppService {
	constructor(@InjectRepository(ProjectEntity) private readonly projectRepository: ProjectRepository) {}
	getProjects() {
		return this.projectRepository.getProjects();
	}

	addProject(projectData: ProjectReqest) {
		return this.projectRepository.addProject(projectData);
	}

	async getProject(id: string) {
		const project = this.projectRepository.getProject(id);
		if (!project) {
			throw new Error('Project does not exist');
		}

		return project;
	}

	async removeProject(id: string) {
		const project = await this.getProject(id);
		return this.projectRepository.remove(project);
	}
}
