import { photoDtoValidationSchema } from '../validation/photoDtoValidationSchema';
import { Photo } from '../domain/Photo';
import { Url } from '../types/Url';
import { PhotoDtoValidationError } from '../errors/PhotoDtoValidationError';

export class PhotoDTO {
  id: number;
  title: string;
  url: Url;
  thumbnailUrl: Url;

  constructor(data: any) {
    try {
      const dto = photoDtoValidationSchema.validateSync(data);

      this.id = dto.id;
      this.title = dto.title;
      this.url = dto.url;
      this.thumbnailUrl = dto.thumbnailUrl;
    } catch (err) {
      console.log(err);
      throw new PhotoDtoValidationError();
    }
  }

  toDamain(): Photo {
    return Photo.fromProperties(this);
  }
}
