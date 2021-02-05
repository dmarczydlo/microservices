import { EntityRepository, Repository } from 'typeorm';
import { ProjectEntity } from './entity/project.entity';
import { ProjectReqest } from './models/project.model';

@EntityRepository(ProjectEntity)
export class ProjectRepository extends Repository<ProjectEntity> {
	getProjects() {
		return this.find();
	}
	addProject = (projectData: ProjectReqest) => {
		return this.save(projectData);
	};

	getProject(id: string) {
		return this.findOne(id);
	}

	removeProject(project: ProjectEntity) {
		return this.remove(project);
	}
}
