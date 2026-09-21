export type EndpointsType = 'SEARCH_SHOW' | 'SHOW_CATALOGUE' | 'SHOW_DETAILS'

export class ApiError {
  constructor(
    public status: number,
    public message: string = 'Something went wrong',
    public endpoint?: EndpointsType,
  ) {}
}
