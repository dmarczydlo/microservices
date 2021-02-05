import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('project')
export class ProjectEntity {
	@PrimaryColumn({ type: 'varchar', length: 32 })
	id: string;

	@Column({ type: 'varchar', length: 36 })
	name: string;

	@Column({ type: 'varchar', length: 255 })
	description: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@CreateDateColumn({ name: 'updated_at' })
	updatedAt: Date;
}
