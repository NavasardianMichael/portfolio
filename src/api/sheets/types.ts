export type T_SheetFieldValue = string

export type T_SheetRowResponse = T_SheetFieldValue[]

export type SheetsAPIResponse = {
  majorDimension: string
  range: string
  values: T_SheetRowResponse[]
}
