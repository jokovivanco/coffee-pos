export class ResponseError extends Error {
  constructor(public status: number, public message: string) {
    super(message);
    this.name = "ResponseError";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ResponseError);
    }
  }
}
