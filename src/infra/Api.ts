import { PhotoDTO } from '@/dto/PhotoDTO';
import { IApi } from '../interfaces/IApi';
import { FetchAllPhotosError } from '../errors/FetchAllPhotosError';
import { FetchPhotoByIdError } from '../errors/FetchPhotoByIdError';
import { BACKEND_URL } from '../constants/config';

class Api implements IApi {
  public async getAllPhotos(): Promise<PhotoDTO[]> {
    try {
      const response = await fetch(
        `${BACKEND_URL}/photos`
      );
      const data = await response.json();
      if (!Array.isArray(data))
        throw new Error('getAllPhotos response is not array');
      return data.map((item) => new PhotoDTO(item));
    } catch (err) {
      console.log(err);
      throw new FetchAllPhotosError();
    }
  }

  public async getPhotoById(id: number): Promise<PhotoDTO> {
    try {
      const response = await fetch(
        `${BACKEND_URL}/photos?id=${id}`
      );
      const data = await response.json();
      if (!Array.isArray(data))
        throw new Error('getAllPhotos response is not array');
      return new PhotoDTO(data[0]);
    } catch (err) {
      console.log(err);
      throw new FetchPhotoByIdError();
    }
  }
}

const api = new Api();

export { api };
