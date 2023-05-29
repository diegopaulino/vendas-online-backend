import { DataSource } from 'typeorm';
import { UserEntity } from './user/entities/user.entity';

const AppDataSource = new DataSource({
    type: 'postgres',
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    entities: [`src/**/*.entity{.js,.ts}`, UserEntity],
    migrations: [`${__dirname}/src/migration/{*.ts,*.js}`],
});

//TODO "Alterar informações do banco para pegar do .env"

export default AppDataSource;