import { PartialType } from '@nestjs/swagger';
import { CreateSegerenciaDto } from './create-segerencia.dto';

export class UpdateSegerenciaDto extends PartialType(CreateSegerenciaDto) {}
