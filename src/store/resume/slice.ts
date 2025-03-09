import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ResumeSlice, ResumeSliceActionPayloads } from './types'
import { RESUME_INITIAL_STATE } from 'helpers/constants/resume'

const initialState: ResumeSlice = RESUME_INITIAL_STATE

export const { reducer: resumeReducer, actions } = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setResumeOptions: (state, { payload }: PayloadAction<ResumeSliceActionPayloads['setResumeOptions']>) => {
      return {
        ...state,
        ...payload,
      }
    },
  }
})

export const { setResumeOptions } = actions
