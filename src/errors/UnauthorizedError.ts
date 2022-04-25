import { CustomError } from "./customError"

export class UnauthorizedError extends CustomError {
  statusCode = 401

  constructor(message = 'Unauthorized') {
    super(message)

    Object.setPrototypeOf(this, UnauthorizedError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}
