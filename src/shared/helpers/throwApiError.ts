import { ApiError, type EndpointsType } from '../types/error'

export function throwApiError(e: unknown, endpoint: EndpointsType): never {
  if (e instanceof ApiError) {
    throw new ApiError(e.status, e.message, endpoint)
  }
  throw new ApiError(500, 'Something went wrong', endpoint)
}
