export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public endpoint?: string,
  ) {
    super(message)
    this.name = 'ApiError'
  }
}
