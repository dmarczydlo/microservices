import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class FileResponse {
    @ApiProperty({ type: 'string', required: true })
    @Expose()
    id: string;

    @ApiProperty({ type: 'string', required: true })
    @Expose()
    mimetype: string;

    @ApiProperty({ type: 'number', required: true })
    @Expose()
    size: number;
}