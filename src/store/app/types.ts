export type AppSlice = {
  isLightMode: boolean
  isPending: boolean
  errorMessage: Error['message']
}

export type AppActionPayloads = {
  setAppOptions: Partial<AppSlice>
}
