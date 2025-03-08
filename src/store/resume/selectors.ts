import { RootState } from 'store/main'

export const selectResume = (state: RootState) => state.resume

export const selectAboutItems = (state: RootState) => state.resume.aboutItems

export const selectCharacteristics = (state: RootState) => state.resume.characteristics

export const selectContributions = (state: RootState) => state.resume.contributions

export const selectEducation = (state: RootState) => state.resume.education

export const selectExperience = (state: RootState) => state.resume.experience

export const selectSocials = (state: RootState) => state.resume.socials

export const selectSkills = (state: RootState) => state.resume.skills
