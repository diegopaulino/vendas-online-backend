import { stateEntityMock } from '../../state/__mocks__/state.mock';
import { CityEntity } from '../entities/city.entity';

export const cityEntityMock: CityEntity = {
  id: 10101,
  name: 'cityNameMock',
  stateId: stateEntityMock.id,
  created_at: new Date(),
  updated_at: new Date(),
};
