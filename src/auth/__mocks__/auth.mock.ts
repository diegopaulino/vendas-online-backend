import { CreateUserDto } from '../../user/dtos/createUser.dto';
import { UserType } from '../../user/enum/user-type.enum';

export const createUserMock: CreateUserDto = {
  cpf: '38322919228',
  email: 'emailmock@email.com',
  name: 'Teste create user',
  password: 'password',
  phone: '11938293829',
  typeUser: UserType.User
};
