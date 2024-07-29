export class PhotoDtoValidationError extends Error {
  constructor() {
    super(
      'Failed to create Photo domain class from the Photo, validation error.'
    );
  }
}
