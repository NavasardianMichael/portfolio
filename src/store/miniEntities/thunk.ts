import {
  getDriveTypesAPI,
  getEngineTypesAPI,
  getMiniEntitiesAPI,
  getModelsAPI,
  getModificationsAPI,
  getTransmissionsAPI,
  getYearsAPI,
} from 'api/miniEntities/main'
import {
  GetDriveTypesAPI,
  GetEngineTypesAPI,
  GetMiniEntitiesAPI,
  GetModelsAPI,
  GetModificationsAPI,
  GetTransmissionsAPI,
  GetYearsAPI
} from 'api/miniEntities/types'
import { PostForm } from 'helpers/constants/post'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { createAppAsyncThunk } from 'helpers/functions/store'
import { initMiniEntities, initPartialMiniEntities } from './slice'
import { MiniEntitiesSlice } from './types'

export const getMiniEntitiesThunk = createAppAsyncThunk<MiniEntitiesSlice, GetMiniEntitiesAPI['payload']>(
  `${STATE_SLICE_NAMES.miniEntities}/getMiniEntities`,
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const currentMiniEntities = getState().miniEntities
      // Checking the presence of existing mini entities (e.g. priceUnits are intialized).
      // If mini entities are already initialized, there is no need to pull them again.
      // The checking is useful for the scenario when the user switches between pages, where mini entities are required to be initialized.
      if (currentMiniEntities.priceUnits.length) return currentMiniEntities

      const miniEntities = await getMiniEntitiesAPI()
      dispatch(initMiniEntities(miniEntities))
      return miniEntities
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const getModelsThunk = createAppAsyncThunk<GetModelsAPI['processed'], PostForm>(
  `${STATE_SLICE_NAMES.miniEntities}/getModels`,
  async ({ brandId }, { rejectWithValue, dispatch }) => {
    try {
      const models = await getModelsAPI({ brandId: brandId! })
      dispatch(initPartialMiniEntities({
        models,
        years: [],
        engineTypes: [],
        driveTypes: [],
        transmissionTypes: [],
        modifications: [],
      }))
      return models
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const getYearsThunk = createAppAsyncThunk<GetYearsAPI['processed'], PostForm>(
  `${STATE_SLICE_NAMES.miniEntities}/getYears`,
  async ({ modelId }, { rejectWithValue, dispatch }) => {
    try {
      const years = await getYearsAPI({ modelId: modelId! })
      dispatch(initPartialMiniEntities({
        years,
        engineTypes: [],
        driveTypes: [],
        transmissionTypes: [],
        modifications: [],
      }))
      return years
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const getEngineTypesThunk = createAppAsyncThunk<GetEngineTypesAPI['processed'], PostForm>(
  `${STATE_SLICE_NAMES.miniEntities}/getEngineTypes`,
  async ({ modelId, year }, { rejectWithValue, dispatch }) => {
    try {
      const engineTypes = await getEngineTypesAPI({ modelId: modelId!, year: year! })
      dispatch(initPartialMiniEntities({
        engineTypes,
        driveTypes: [],
        transmissionTypes: [],
        modifications: [],
      }))
      return engineTypes
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const getDriveTypesThunk = createAppAsyncThunk<GetDriveTypesAPI['processed'], PostForm>(
  `${STATE_SLICE_NAMES.miniEntities}/getDriveTypes`,
  async ({ modelId, year, engineId }, { rejectWithValue, dispatch }) => {
    try {
      const driveTypes = await getDriveTypesAPI({ modelId: modelId!, year: year!, engineTypeId: engineId! })
      dispatch(initPartialMiniEntities({
        driveTypes,
        transmissionTypes: [],
        modifications: [],
      }))
      return driveTypes
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const getTransmissionsThunk = createAppAsyncThunk<GetTransmissionsAPI['processed'], PostForm>(
  `${STATE_SLICE_NAMES.miniEntities}/getTransmissions`,
  async ({ modelId, year, engineId, carDriveTypeId }, { rejectWithValue, dispatch }) => {
    try {
      const transmissionTypes = await getTransmissionsAPI({
        modelId: modelId!,
        year: year!,
        engineTypeId: engineId!,
        driveTypeId: carDriveTypeId!,
      })
      dispatch(initPartialMiniEntities({ transmissionTypes, modifications: [] }))
      return transmissionTypes
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const getModificationsThunk = createAppAsyncThunk<GetModificationsAPI['processed'], PostForm>(
  `${STATE_SLICE_NAMES.miniEntities}/getModifications`,
  async ({ modelId, year, engineId, carDriveTypeId, transmissionId }, { rejectWithValue, dispatch }) => {
    try {
      const modifications = await getModificationsAPI({
        modelId: modelId!,
        year: year!,
        engineTypeId: engineId!,
        driveTypeId: carDriveTypeId!,
        transmissionId: transmissionId!
      })
      dispatch(initPartialMiniEntities({ modifications }))
      return modifications
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)
