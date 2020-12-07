import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FileDocument = File & Document;

@Schema()
export class File {
  @Prop()
  encoding: string;

  @Prop()
  buffer: Buffer;

  @Prop()
  mimetype: string;

  @Prop()
  originalname: string;

  @Prop()
  size: number;
}

export const FileSchema = SchemaFactory.createForClass(File);