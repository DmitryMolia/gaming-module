import { IPhoto } from '../interfaces/IPhoto';

export const filterPhotosByTitle = (
  title: string,
  photos: IPhoto[]
): IPhoto[] => {
  return photos.filter((photo) => photo.title.includes(title));
};
