import { HttpException, HttpStatus } from "@nestjs/common";

const fileTypes = 'jpg|jpeg|png|gif|pdf';

export const imageFileFilter = (req: Request, file, callback) => {
    const regexp = new RegExp(`.(${fileTypes})$`, "i");

    if (!file.originalname.match(regexp)) {
      return callback(
        new HttpException({
            status: HttpStatus.BAD_REQUEST,
            message: `Incorrect file type. You can use one of the following types: [${fileTypes}]`,
          }, HttpStatus.BAD_REQUEST)
      );
    }
    callback(null, true);
  };