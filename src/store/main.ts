import { configureStore } from '@reduxjs/toolkit'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { appReducer } from './app/slice'
import { resumeReducer } from './resume/slice'

export const store = configureStore({
  reducer: {
    [STATE_SLICE_NAMES.app]: appReducer,
    [STATE_SLICE_NAMES.resume]: resumeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
