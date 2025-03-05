import { MiniEntitiesSlice, MiniEntity } from 'store/miniEntities/types'
import { Car } from 'store/posts/types'
import { Endpoint } from 'helpers/types/api'

export type GetMiniEntitiesAPI = Endpoint<{
  payload: void
  response: MiniEntitiesSlice
  processed: MiniEntitiesSlice
}>

export type GetModelsAPI = Endpoint<{
  payload: { brandId: MiniEntity['id'] }
  response: MiniEntity[]
  processed: MiniEntity[]
}>

export type GetYearsAPI = Endpoint<{
  payload: { modelId: MiniEntity['id'] }
  response: Car['year'][]
  processed: MiniEntity[]
}>

export type GetEngineTypesAPI = Endpoint<{
  payload: { modelId: MiniEntity['id']; year: Car['year'] }
  response: MiniEntity[]
  processed: MiniEntity[]
}>

export type GetDriveTypesAPI = Endpoint<{
  payload: { modelId: MiniEntity['id']; year: Car['year']; engineTypeId: MiniEntity['id'] }
  response: MiniEntity[]
  processed: MiniEntity[]
}>

export type GetTransmissionsAPI = Endpoint<{
  payload: {
    modelId: MiniEntity['id']
    year: Car['year']
    engineTypeId: MiniEntity['id']
    driveTypeId: MiniEntity['id']
  }
  response: MiniEntity[]
  processed: MiniEntity[]
}>

export type GetModificationsAPI = Endpoint<{
  payload: {
    modelId: MiniEntity['id']
    year: Car['year']
    engineTypeId: MiniEntity['id']
    driveTypeId: MiniEntity['id']
    transmissionId: MiniEntity['id']
  }
  response: MiniEntity[]
  processed: MiniEntity[]
}>
