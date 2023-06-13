import { UserEntity } from "../entities/user.entity";
import { UserType } from "../enum/user-type.enum";

export const userEntityMock: UserEntity = {
    cpf: '22299938493',
    email: 'emailmock@email.com',
    id: 1010,
    name: 'nameMock',
    password: '$2b$10$52gc0n/1FrgIwEIo3SyaNelwocZnUdnk5dW8EvqnKQKuHjlOaaQ2m',
    phone: '11938293888',
    typeUser: UserType.User,
    created_at: new Date(),
    updated_at: new Date(),
}