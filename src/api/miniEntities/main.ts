import axiosInstance from 'api/axiosInstance'
import { handleAPIError, paramsToQueryString } from 'helpers/functions/api'
import { APIResponse } from 'helpers/types/api'
import { ENDPOINTS } from './endpoints'
import { processMiniEntitiesResponse, processMiniEntityResponse, processYearsResponse } from './processors'
import { GetDriveTypesAPI, GetEngineTypesAPI, GetMiniEntitiesAPI, GetModelsAPI, GetModificationsAPI, GetTransmissionsAPI, GetYearsAPI } from './types'

export const getMiniEntitiesAPI: GetMiniEntitiesAPI['api'] = async () => {
  const { data } = await axiosInstance.get<APIResponse<GetMiniEntitiesAPI['response']>>(ENDPOINTS.getMiniEntitiesAPI)
  handleAPIError(data)
  const processedResponse = processMiniEntitiesResponse(data)
  return processedResponse
}

export const getModelsAPI: GetModelsAPI['api'] = async (params) => {
  const { data } = await axiosInstance.get<APIResponse<GetModelsAPI['response']>>(`${ENDPOINTS.getModelsAPI}?${paramsToQueryString(params)}`)
  handleAPIError(data)
  const processedResponse = processMiniEntityResponse(data)
  return processedResponse
}

export const getYearsAPI: GetYearsAPI['api'] = async (params) => {
  const { data } = await axiosInstance.get<APIResponse<GetYearsAPI['response']>>(`${ENDPOINTS.getYearsAPI}?${paramsToQueryString(params)}`)
  handleAPIError(data)
  const processedResponse = processYearsResponse(data)
  return processedResponse
}

export const getEngineTypesAPI: GetEngineTypesAPI['api'] = async (params) => {
  const { data } = await axiosInstance.get<APIResponse<GetEngineTypesAPI['response']>>(`${ENDPOINTS.getEngineTypesAPI}?${paramsToQueryString(params)}`)
  handleAPIError(data)
  const processedResponse = processMiniEntityResponse(data)
  return processedResponse
}

export const getDriveTypesAPI: GetDriveTypesAPI['api'] = async (params) => {
  const { data } = await axiosInstance.get<APIResponse<GetDriveTypesAPI['response']>>(`${ENDPOINTS.getDriveTypesAPI}?${paramsToQueryString(params)}`)
  handleAPIError(data)
  const processedResponse = processMiniEntityResponse(data)
  return processedResponse
}

export const getTransmissionsAPI: GetTransmissionsAPI['api'] = async (params) => {
  const { data } = await axiosInstance.get<APIResponse<GetTransmissionsAPI['response']>>(`${ENDPOINTS.getTransmissionsAPI}?${paramsToQueryString(params)}`)
  handleAPIError(data)
  const processedResponse = processMiniEntityResponse(data)
  return processedResponse
}

export const getModificationsAPI: GetModificationsAPI['api'] = async (params) => {
  const { data } = await axiosInstance.get<APIResponse<GetModificationsAPI['response']>>(`${ENDPOINTS.getModificationsAPI}?${paramsToQueryString(params)}`)
  handleAPIError(data)
  const processedResponse = processMiniEntityResponse(data)
  return processedResponse
}
