import { Url } from '../types/Url';
import { IPhoto } from '../interfaces/IPhoto';

export class Photo implements IPhoto {
  private _id: number;
  private _title: string;
  private _url: Url;
  private _thumbnailUrl: Url;

  private constructor(id: number, title: string, url: Url, thumbnailUrl: Url) {
    this._id = id;
    this._title = title;
    this._url = url;
    this._thumbnailUrl = thumbnailUrl;
  }

  public get id(): number {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public get url(): Url {
    return this._url;
  }

  public get thumbnailUrl(): Url {
    return this._thumbnailUrl;
  }

  public static fromProperties(properties: {
    id: number;
    title: string;
    url: Url;
    thumbnailUrl: Url;
  }): Photo {
    const { id, title, url, thumbnailUrl } = properties;
    return new Photo(id, title, url, thumbnailUrl);
  }
}
