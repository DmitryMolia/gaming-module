import { PhotoDTO } from "../dto/PhotoDTO";

export interface IApi {
  getAllPhotos(): Promise<PhotoDTO[]>;
}
