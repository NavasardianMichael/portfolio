import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { MiniEntitiesSlice, PostsActionPayloads } from './types'

const initialState: MiniEntitiesSlice = {
  availabilities: [],
  bodyTypes: [],
  carCategories: [],
  documentTypes: [],
  engineTypes: [],
  ownerNumbers: [],
  transmissionTypes: [],
  brands: [],
  colors: [],
  driveTypes: [],
  models: [],
  priceUnits: [],
  years: [],
  modifications: []
}

export const { reducer: miniEntitiesReducer, actions } = createSlice({
  name: STATE_SLICE_NAMES.miniEntities,
  initialState,
  reducers: {
    initMiniEntities: (_, { payload }: PayloadAction<PostsActionPayloads['initMiniEntities']>) => {
      return payload
    },
    initPartialMiniEntities: (state, { payload }: PayloadAction<PostsActionPayloads['initPartialMiniEntities']>) => {
      return {
        ...state,
        ...payload
      }
    },
  },
})

export const { initMiniEntities, initPartialMiniEntities } = actions

export default miniEntitiesReducer
