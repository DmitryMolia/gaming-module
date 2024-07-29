export class FetchAllPhotosError extends Error {
  constructor() {
    super("Couldn't get a list of photos");
  }
}
