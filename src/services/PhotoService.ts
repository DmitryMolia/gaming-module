import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { PhotoDTO } from '../dto/PhotoDTO';
import { IPhoto } from '../interfaces/IPhoto';
import { PhotoRepository } from '@/repositories/PhotoRepository';

@injectable()
export class PhotoService {
  private _photoRepository: PhotoRepository;

  constructor(@inject(PhotoRepository) photoRepository: PhotoRepository) {
    this._photoRepository = photoRepository;
  }

  public async getAllPhotos(): Promise<IPhoto[]> {
    const photos = await this._photoRepository.getAll();
    return photos.map((photo) => new PhotoDTO(photo));
  }

  public async getById(id: number): Promise<IPhoto> {
    const photo = await this._photoRepository.getById(id);
    return new PhotoDTO(photo);
  }
}
