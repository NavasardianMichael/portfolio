import { Profile } from 'store/profile/types'
import { ROLES } from './auth/profile'
import { object } from 'yup'
import { generateRequiredStringSchema } from '../functions/commons'
import { Endpoint } from '../types/api'

export const PROFILE_INITIAL_DATA: Profile = {
  email: '',
  role: ROLES.admin,
  phone: '123456789',
}

type ProfileForm = {
  firstName: string,
  lastName: string,
  countryId: string,
  regionId: string,
  address: string,
  phoneNumber: string,
  telegram: string,
  whatsApp: string,
  viber: string,
}

export const PROFILE_FORM_VALIDATION_SCHEMA = object({
  firstName: generateRequiredStringSchema('Description'),
  lastName: generateRequiredStringSchema('surname Info'),
  countryId: generateRequiredStringSchema('country Info'),
  regionId: generateRequiredStringSchema('region Info Email'),
  address: generateRequiredStringSchema('address Info Email'),
  phoneNumber: generateRequiredStringSchema('phoneNumber Info Email'),
  telegram: generateRequiredStringSchema('telegram Info Email'),
  whatsApp: generateRequiredStringSchema('whatsapp Info Email'),
  viber: generateRequiredStringSchema('viber Info Email'),
})

export type CompleteProfileAPI = Endpoint<{
  payload: ProfileForm
  response: void
  processed: void
}>

export const PROFILE_FORM_INITIAL_VALUES: ProfileForm = {
  firstName: '',
  lastName: '',
  countryId: '',
  regionId: '',
  address: '',
  phoneNumber: '',
  telegram: '',
  whatsApp: '',
  viber: '',
}
