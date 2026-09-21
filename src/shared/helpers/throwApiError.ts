import { ApiError, type EndpointsType } from '../types/error'

interface Props {
  e: unknown
  endpoint: EndpointsType
}

export function throwApiError({ e, endpoint }: Props): never {
  if (e instanceof ApiError) {
    throw new ApiError(e.status, e.message, endpoint)
  }
  throw new ApiError(500, 'Something went wrong', endpoint)
}
