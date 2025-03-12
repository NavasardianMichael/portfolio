import { PayloadAction, SerializedError, createSlice } from '@reduxjs/toolkit'
import { isFulfilledAction, isPendingAction, isRejectedAction } from 'helpers/functions/store'
import { AppActionPayloads, AppSlice } from './types'
import { UI_MODES } from 'helpers/constants/uiMode'

const initialState: AppSlice = {
  uiMode: UI_MODES.dark,
  isMobileMenuOpened: false,
  isPending: false,
  errorMessage: ''
}

export const { reducer: appReducer, actions } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppOptions: (state, { payload }: PayloadAction<AppActionPayloads['setAppOptions']>) => {
      return {
        ...state,
        ...payload,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isRejectedAction, (state, action: PayloadAction<SerializedError>) => {
        state.isPending = false
        state.errorMessage = action.payload.message ?? 'Something went wrong.'
      })
      .addMatcher(isPendingAction, (state) => {
        state.isPending = true
      })
      .addMatcher(isFulfilledAction, (state) => {
        state.isPending = false
      })
  },
})

export const { setAppOptions } = actions

export default appReducer
