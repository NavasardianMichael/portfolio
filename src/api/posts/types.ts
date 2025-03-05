import { UploadFile } from 'antd'
import { MiniEntity } from 'store/miniEntities/types'
import { Car, ContactInfo, Post, PostsSlice } from 'store/posts/types'
import { Endpoint } from 'helpers/types/api'
import { USED_STATUSES } from 'helpers/constants/filters'

type PostResponseImage = {
  id: string
  url: string
}

type FavoriteResponsePayload = {
  postId: string
}

type PostResponse = Pick<Post, 'id' | 'description' | 'createdDateUtc' | 'modifiedDateUtc'> &
  Pick<
    Car,
    | 'availability'
    | 'brand'
    | 'model'
    | 'year'
    | 'vin'
    | 'category'
    | 'bodyType'
    | 'engine'
    | 'drive'
    | 'transmission'
    | 'modification'
    | 'mileage'
    | 'documentType'
    | 'ownerNumber'
    | 'purchaseDate'
    | 'damaged'
    | 'runAndGo'
    | 'underWarranty'
    | 'clearance'
  > & {
    mainImage: PostResponseImage
    images: PostResponseImage[]
    priceUnit: Car['price']['unit']
    price: Car['price']['car']
    colorHex: string
    contactName: ContactInfo['name']
    contactEmail: ContactInfo['email']
    contactPhoneNumber: ContactInfo['phoneNumber']
    lookupAddress: ContactInfo['lookupAddress']
    isFavorite: boolean
    videoUrl: string
  }

type PostRequestPayload = {
  Id?: Post['id']
  MainImage: Partial<UploadFile>
  Video: Partial<UploadFile>
  Images: Partial<UploadFile>[]
  Description: Post['description']
  Damaged: Car['damaged']
  RunAndGo: Car['runAndGo']
  UnderWarranty: Car['underWarranty']
  Clearance: Car['clearance']
  Year: Car['year']
  Vin: Car['vin']
  Mileage: Car['mileage']
  PurchaseDate: Car['purchaseDate']
  Price: Car['price']['car']
  Name: ContactInfo['name']
  Email: ContactInfo['email']
  PhoneNumber: ContactInfo['phoneNumber']
  LookupAddress: ContactInfo['lookupAddress']
  PriceUnit: MiniEntity['id'] | undefined
  AvailabilityId: MiniEntity['id'] | undefined
  BrandId: MiniEntity['id'] | undefined
  ModelId: MiniEntity['id'] | undefined
  CategoryId: MiniEntity['id'] | undefined
  BodyTypeId: MiniEntity['id'] | undefined
  EngineId: MiniEntity['id'] | undefined
  CarDriveTypeId: MiniEntity['id'] | undefined
  TransmissionId: MiniEntity['id'] | undefined
  ModificationId: MiniEntity['id'] | undefined
  ColorId: MiniEntity['id'] | undefined
  DocumentTypeId: MiniEntity['id'] | undefined
  OwnerNumberId: MiniEntity['id'] | undefined
}

type FilterPostsRequestPayload = {
  usedStatus?: typeof USED_STATUSES[keyof typeof USED_STATUSES]
  brandId?: MiniEntity['id']
  modelId?: MiniEntity['id']
  bodyTypeId?: MiniEntity['id']
  transmissionId?: MiniEntity['id']
  engineId?: MiniEntity['id']
  carDriveTypeId?: MiniEntity['id']
  yearFrom?: Car['year']
  yearTo?: Car['year']
  mileageFrom?: Car['mileage']
  mileageTo?: Car['mileage']
  priceFrom?: Car['price']['car']
  priceTo?: Car['price']['car']
}

export type GetPostsAPI = Endpoint<{
  payload: {
    page: number
    pageCount: number
    status?: string
  }
  response: PostResponse[]
  processed: PostsSlice['list']
}>

export type GetPostAPI = Endpoint<{
  payload: Pick<Post, 'id'>
  response: PostResponse
  processed: Post
}>

export type GetFilteredPostsAPI = Endpoint<{
  payload: FilterPostsRequestPayload
  response: PostResponse[]
  processed: PostsSlice['list']
}>

export type CreatePostAPI = Endpoint<{
  payload: Omit<PostRequestPayload, 'Id'>
  response: void
  processed: void
}>

export type EditPostAPI = Endpoint<{
  payload: PostRequestPayload
  response: void
  processed: void
}>

export type DeletePostAPI = Endpoint<{
  payload: Pick<Post, 'id'>
  response: void
  processed: void
}>

export type FavoritePostAPI = Endpoint<{
  payload: FavoriteResponsePayload
  response: void
  processed: void
}>
