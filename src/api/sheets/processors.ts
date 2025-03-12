import { ResumeSlice } from 'store/resume/types'
import { RESUME_INITIAL_STATE } from 'helpers/constants/resume'
import { SheetsAPIResonse } from './types'

export const processResume = (response: SheetsAPIResonse): ResumeSlice => {
  const processed = response.values.reduce((acc, row) => {
    const [fieldName, uniqueRecordValue] = row
    if (!fieldName) return acc

    switch (fieldName as keyof ResumeSlice) {
      case 'fullName':
      case 'bio':
      case 'primaryImageUrl':
      case 'secondaryImageUrl':
      case 'specialization':
        acc[fieldName] = uniqueRecordValue
        break
      case 'aboutItems': {
        const [, name, value] = row
        acc[fieldName].push({
          name,
          value,
        })
        break
      }
      case 'characteristics': {
        const [, value] = row
        const items = acc[fieldName] as ResumeSlice['characteristics']
        items.push(value)
        break
      }
      case 'contributions': {
        const [, title, description, assetUrl, imageUrl] = row
        const items = acc[fieldName] as ResumeSlice['contributions']
        items.push({
          assetUrl,
          description,
          imageUrl,
          title,
        })
        break
      }
      case 'education': {
        const [, position, company, location, from, to] = row
        const items = acc[fieldName] as ResumeSlice['education']
        items.push({
          company,
          from,
          location,
          position,
          to,
        })
        break
      }
      case 'experience': {
        const [, position, company, location, from, to] = row
        const items = acc[fieldName] as ResumeSlice['experience']
        items.push({
          company,
          from,
          location,
          position,
          to,
        })
        break
      }
      case 'publications': {
        const [, title, journal, details, url] = row
        const items = acc[fieldName] as ResumeSlice['publications']
        items.push({
          details,
          journal,
          title,
          url,
        })
        break
      }
      case 'skills': {
        const [, skill] = row
        const items = acc[fieldName] as ResumeSlice['skills']
        items.push(skill)
        break
      }
      case 'socials': {
        const [, name, assetUrl] = row
        const items = acc[fieldName] as ResumeSlice['socials']
        items.push({
          assetUrl,
          name,
        })
        break
      }
      default:
        break
    }
    return acc
  }, JSON.parse(JSON.stringify(RESUME_INITIAL_STATE)))

  return processed
}
