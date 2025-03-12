import { ResumeSlice } from 'store/resume/types'

export const RESUME_INITIAL_STATE: ResumeSlice = {
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
}
