import { UIMode } from "helpers/types/uiMode"

export type AppSlice = {
  uiMode: UIMode
  isMobileMenuOpened: boolean
  isPending: boolean
  errorMessage: Error['message']
}

export type AppActionPayloads = {
  setAppOptions: Partial<AppSlice>
}
