import { APIResponse } from 'helpers/types/api'

export const handleAPIError = (response: APIResponse<unknown>) => {
  if (response.isSuccess) return
  throw Error(response.error.description)
}

export const paramsToQueryString = (params: Record<string, unknown>) => {
  if (!Object.keys(params).length) return ''
  const paramsStr = Object.entries(params).map(([key, value]) => [key, value as string])
  return new URLSearchParams(paramsStr).toString()
}

export const getMockAsFakeAPI = async (data: unknown) => {
  return Promise.resolve(data)
}
