import { DataSource } from 'typeorm';
import { UserEntity } from './user/interface/user.entity';

const AppDataSource = new DataSource({
    type: 'postgres',
    database: "vendason",
    host: "localhost",
    password: "mysecretpassword",
    port: 5432,
    username: "postgres",
    entities: [`src/**/*.entity{.js,.ts}`, UserEntity],
    migrations: [`${__dirname}/src/migration/{*.ts,*.js}`],
});

export default AppDataSource;