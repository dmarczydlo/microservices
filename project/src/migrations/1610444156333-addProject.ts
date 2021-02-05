import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddProject1610444156333 implements MigrationInterface {
	private tableName = 'project';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: this.tableName,
				columns: [
					{
						name: 'id',
						type: 'varchar',
						length: '32',
						isPrimary: true
					},
					{
						name: 'name',
						type: 'varchar',
						length: '36'
					},
					{
						name: 'description',
						type: 'varchar',
						length: '255'
					},
					{
						name: 'created_at',
						type: 'timestamp',
						length: '6',
						isNullable: false,
						default: 'CURRENT_TIMESTAMP(6)'
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						length: '6',
						isNullable: false,
						default: 'CURRENT_TIMESTAMP(6)'
					}
				]
			}),
			true
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(this.tableName);
	}
}
