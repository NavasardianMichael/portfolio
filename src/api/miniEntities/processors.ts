import { GetMiniEntitiesAPI, GetModelsAPI, GetYearsAPI } from './types'

export const processMiniEntitiesResponse: GetMiniEntitiesAPI['processor'] = (response) => {
  return response.value
}

export const processMiniEntityResponse: GetModelsAPI['processor'] = (response) => {
  return response.value.map(miniEntityItem => ({
    id: miniEntityItem.id,
    name: miniEntityItem.name
  }))
}

export const processYearsResponse: GetYearsAPI['processor'] = (response) => {
  return response.value.map(year => ({
    id: year.toString(),
    name: year.toString()
  }))
}
