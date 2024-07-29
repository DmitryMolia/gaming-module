import { injectable } from 'inversify';
import 'reflect-metadata';
import { api } from '../infra/Api';
import { Photo } from '../domain/Photo';

@injectable()
export class PhotoRepository {
  public async getAll(): Promise<Photo[]> {
    const photoDTOs = await api.getAllPhotos();
    return photoDTOs.map((photoDTO) => photoDTO.toDamain());
  }

  public async getById(id: number): Promise<Photo> {
    const photoDTO = await api.getPhotoById(id);
    return photoDTO.toDamain();
  }
}
