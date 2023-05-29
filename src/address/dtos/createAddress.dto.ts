import { IsInt, IsString, IsOptional } from "class-validator";

export class CreateAddressDto {
    @IsOptional()
    @IsString()
    complement: string;

    @IsInt()
    numberAddress: number;

    @IsString()
    cep: string;

    @IsInt()
    cityId: number;
}