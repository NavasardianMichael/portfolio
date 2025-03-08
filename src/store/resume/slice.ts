import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ResumeSlice, ResumeSliceActionPayloads } from './types'

const initialState: ResumeSlice = {
  fullName: '',
  characteristics: [],
  primaryImageUrl: '',
  secondaryImageUrl: '',
  bio: '',
  specialization: '',
  aboutItems: [],
  skills: [],
  education: [],
  experience: [],
  publications: [],
  contributions: [],
  socials: [],
  sectionNames: []
}

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
