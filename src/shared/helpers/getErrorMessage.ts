import { ApiError, type EndpointsType } from '../types/error'

const errorMessages: Record<EndpointsType, string> = {
  SHOW_CATALOGUE: 'We could not load the shows right now',
  SHOW_DETAILS: 'We could not load the details of this show',
  SEARCH_SHOW: 'We could not search for shows right now',
}

export function getErrorMessage(error: ApiError): string {
  if (error instanceof ApiError && error.endpoint) {
    return errorMessages[error.endpoint]
  }

  return 'Something went wrong'
}
