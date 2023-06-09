import { cityEntityMock } from '../../city/__mocks__/city.mock';
import { CreateAddressDto } from '../dtos/createAddress.dto';
import { addressEntityMock } from './address.mock';

export const createAddressMock: CreateAddressDto = {
  cep: '09040303',
  cityId: cityEntityMock.id,
  complement: addressEntityMock.complement,
  numberAddress: addressEntityMock.numberAddress,
};
