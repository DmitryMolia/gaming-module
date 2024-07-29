export class FetchPhotoByIdError extends Error {
  constructor() {
    super("Couldn't get a photo by id");
  }
}
