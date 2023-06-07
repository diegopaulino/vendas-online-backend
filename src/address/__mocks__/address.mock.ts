import { userEntityMock } from "../../user/__mocks__/user.mock";
import { AddressEntity } from "../entities/address.entity";
import { cityEntityMock } from "../../city/__mocks__/city.mock";

export const addressEntityMock: AddressEntity = {
    id: 232,
    userId: userEntityMock.id,
    complement: 'casa 2',
    numberAddress: 120,
    cep: '09039303',
    cityId: cityEntityMock.id,
    created_at: new Date(),
    updated_at: new Date()
}