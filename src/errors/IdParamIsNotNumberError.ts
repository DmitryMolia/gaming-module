export class IdParamIsNotNumberError extends Error {
  constructor() {
    super("Invalid parameter passed: 'id' is not a number");
  }
}
