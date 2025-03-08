export type ResumeSlice = {
  fullName: string
  characteristics: string[]
  primaryImageUrl: string
  secondaryImageUrl: string
  bio: string
  specialization: string
  aboutItems: {
    name: string
    value: string
  }[]
  skills: string[]
  education: Experience[]
  experience: Experience[]
  publications: {
    title: string
    journal: string
    date: string
    url: string
  }[]
  contributions: {
    title: string
    description: string
    imageUrl: string
    assetUrl: string
  }[]
  socials: {
    name: string
    assetUrl: string
  }[]
  sectionNames: string[]
}

type Experience = {
  position: string
  from: string
  to?: string
  company: string
  location: string
}

export type ResumeSliceActionPayloads = {
  setResumeOptions: Partial<ResumeSlice>
}
