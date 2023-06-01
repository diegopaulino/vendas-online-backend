import { MigrationInterface, QueryRunner } from "typeorm"

export class AlterTableUser1685643289236 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            ALTER TABLE public.user add unique(email);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}

}
