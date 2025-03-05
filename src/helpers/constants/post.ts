import { UploadFile } from 'antd'
import { object } from 'yup'
import { MiniEntity } from 'store/miniEntities/types'
import { Car, ContactInfo, Post } from 'store/posts/types'
import { generateRequiredStringSchema } from 'helpers/functions/commons'

export type PostForm = {
  primaryImage: Partial<UploadFile>
  video: Partial<UploadFile>
  secondaryImages: Partial<UploadFile>[]
  contactInfoName: ContactInfo['name']
  contactInfoEmail: ContactInfo['email']
  contactInfoPhoneNumber: ContactInfo['phoneNumber']
  contactInfoLookupAddress: ContactInfo['lookupAddress']
  description: Post['description']
  damaged: Car['damaged']
  runAndGo: Car['runAndGo']
  underWarranty: Car['underWarranty']
  clearance: Car['clearance']
  year: Car['year'] | undefined
  vin: Car['vin']
  mileage: Car['mileage'] | undefined
  purchaseDate: Car['purchaseDate']
  price: Car['price']['car'] | undefined
  priceUnit: MiniEntity['id'] | undefined
  availabilityId: MiniEntity['id'] | undefined
  brandId: MiniEntity['id'] | undefined
  modelId: MiniEntity['id'] | undefined
  categoryId: MiniEntity['id'] | undefined
  bodyTypeId: MiniEntity['id'] | undefined
  engineId: MiniEntity['id'] | undefined
  carDriveTypeId: MiniEntity['id'] | undefined
  transmissionId: MiniEntity['id'] | undefined
  modificationId: MiniEntity['id'] | undefined
  colorId: MiniEntity['id'] | undefined
  documentTypeId: MiniEntity['id'] | undefined
  ownerNumberId: MiniEntity['id'] | undefined
}

export const POST_FORM_INITIAL_VALUES: PostForm = {
  description: '',
  damaged: false,
  runAndGo: false,
  underWarranty: false,
  clearance: false,
  year: undefined,
  vin: '',
  mileage: undefined,
  purchaseDate: '',
  price: undefined,
  primaryImage: {},
  video: {},
  secondaryImages: [],
  contactInfoName: '',
  contactInfoEmail: '',
  contactInfoPhoneNumber: '',
  contactInfoLookupAddress: '',
  priceUnit: undefined,
  availabilityId: undefined,
  brandId: undefined,
  modelId: undefined,
  categoryId: undefined,
  bodyTypeId: undefined,
  engineId: undefined,
  carDriveTypeId: undefined,
  transmissionId: undefined,
  colorId: undefined,
  documentTypeId: undefined,
  ownerNumberId: undefined,
  // modificationId: '5a2a2f30-d6d0-4e08-a107-efbe8b50bcc3',
  modificationId: undefined,
}

export const POST_FORM_VALIDATION_SCHEMA = object({
  description: generateRequiredStringSchema('Description'),
  // primaryImage: generateRequiredStringSchema('Primary Image'),
  contactInfoName: generateRequiredStringSchema('Contact Info Name'),
  contactInfoEmail: generateRequiredStringSchema('Contact Info Email'),
  contactInfoPhoneNumber: generateRequiredStringSchema('Contact Info Phone Number'),
  contactInfoLookupAddress: generateRequiredStringSchema('Contact Info Lookup Address'),
  damaged: generateRequiredStringSchema('Damaged Info'),
  availabilityId: generateRequiredStringSchema('Availability Info'),
  priceUnit: generateRequiredStringSchema('priceUnit'),
  brandId: generateRequiredStringSchema('brandId'),
  modelId: generateRequiredStringSchema('modelId'),
  categoryId: generateRequiredStringSchema('categoryId'),
  bodyTypeId: generateRequiredStringSchema('bodyTypeId'),
  engineId: generateRequiredStringSchema('engineId'),
  carDriveTypeId: generateRequiredStringSchema('carDriveTypeId'),
  transmissionId: generateRequiredStringSchema('transmissionId'),
  colorId: generateRequiredStringSchema('colorId'),
  documentTypeId: generateRequiredStringSchema('documentTypeId'),
  ownerNumberId: generateRequiredStringSchema('ownerNumberId'),
})

export const PERSONAL_INFO_FORM_TEMPLATE = [
  { label: 'Name', name: 'contactInfoName', type: 'text', placeholder: 'Enter name' },
  { label: 'Email', name: 'contactInfoEmail', type: 'email', placeholder: 'Enter email' },
  { label: 'Phone Number', name: 'contactInfoPhoneNumber', type: 'text', placeholder: 'Enter phone number' },
  { label: 'Lookup Address', name: 'contactInfoLookupAddress', type: 'text', placeholder: 'Enter address' },
] as const

export const CAR_DETAILS_FORM_TEMPLATE = [
  { label: 'Car VIN number', name: 'vin', type: 'text', placeholder: 'Enter VIN' },
  { label: 'Mileage', name: 'mileage', type: 'number', placeholder: 'Enter Mileage of Car' },
] as const

export const CAR_BOOLEANS_FORM_TEMPLATE = [
  { label: 'Damaged', name: 'damaged' },
  { label: 'Run And Go', name: 'runAndGo' },
  { label: 'Under Warranty', name: 'underWarranty' },
  { label: 'Clearance', name: 'clearance' },
] as const
