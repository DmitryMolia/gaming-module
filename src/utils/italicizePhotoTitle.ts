import { IPhoto } from '../interfaces/IPhoto';

export const italicizePhotoTitle = (title: string, photo: IPhoto): IPhoto => {
  let italicizedTitle = photo.title
    .split(' ')
    .map((word) => {
      if (word.includes(title)) return `<b><i>${word}</i></b>`;
      return word;
    })
    .join(' ');
  photo.title = italicizedTitle;
  return photo;
};
