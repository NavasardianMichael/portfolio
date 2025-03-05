export type MiniEntitiesSlice = {
  availabilities: MiniEntity[]
  carCategories: MiniEntity[]
  bodyTypes: MiniEntity[]
  driveTypes: MiniEntity[]
  engineTypes: MiniEntity[]
  transmissionTypes: MiniEntity[]
  documentTypes: MiniEntity[]
  ownerNumbers: MiniEntity[]
  colors: MiniEntity<{ hex: string }>[]
  models: MiniEntity[]
  brands: MiniEntity[]
  years: MiniEntity[]
  priceUnits: PriceUnit[]
  modifications: MiniEntity[]
}

export type MiniEntity<T = object> = {
  id: string
  name: string
} & T

export type PriceUnit = {
  id: string
  unitSymbol: string
}

export type PostsActionPayloads = {
  initMiniEntities: MiniEntitiesSlice
  initPartialMiniEntities: Partial<MiniEntitiesSlice>
}
