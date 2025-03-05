import { generateRequiredStringSchema } from 'helpers/functions/commons'
import { MiniEntity } from 'store/miniEntities/types'
import { Car } from 'store/posts/types'
import { number, object } from 'yup'

export const USED_STATUSES = {
    all: 'all',
    used: 'used',
    new: 'new',
} as const

export type SelectionFieldNames =
    | 'brandId'
    | 'modelId'
    | 'bodyTypeId'
    | 'transmissionId'
    | 'engineId'
    | 'carDriveTypeId'
    | 'usedStatus'

export const FILTER_FORM_VALIDATE_ON_CHANGE_FIELD_NAMES: (keyof FilterForm)[] = [
    'yearFrom',
    'yearTo',
    'mileageFrom',
    'mileageTo',
    'priceFrom',
    'priceTo',
]

export type FilterForm = {
    usedStatus: typeof USED_STATUSES[keyof typeof USED_STATUSES]
    brandId: MiniEntity['id'] | undefined
    modelId: MiniEntity['id'] | undefined
    bodyTypeId: MiniEntity['id'] | undefined
    transmissionId: MiniEntity['id'] | undefined
    engineId: MiniEntity['id'] | undefined
    carDriveTypeId: MiniEntity['id'] | undefined
    yearFrom: Car['year'] | undefined
    yearTo: Car['year'] | undefined
    mileageFrom: Car['mileage'] | undefined
    mileageTo: Car['mileage'] | undefined
    priceFrom: Car['price']['car'] | undefined
    priceTo: Car['price']['car'] | undefined
}

export const FILTER_FORM_INITIAL_VALUES: FilterForm = {
    usedStatus: USED_STATUSES.all,
    brandId: undefined,
    modelId: undefined,
    bodyTypeId: undefined,
    transmissionId: undefined,
    engineId: undefined,
    carDriveTypeId: undefined,
    yearFrom: undefined,
    yearTo: undefined,
    mileageFrom: undefined,
    mileageTo: undefined,
    priceFrom: undefined,
    priceTo: undefined,
}

export const FILTER_FORM_VALIDATION_SCHEMA = object({
    usedStatus: generateRequiredStringSchema('Used status'),
    yearFrom: number().test('yearFrom', 'Year from should be less than year to', function (value) {
        return value && this.parent.yearTo && value <= this.parent.yearTo;
    }),
    mileageFrom: number().test('mileageFrom', 'Mileage from should be less than mileage to', function (value) {
        return value && this.parent.mileageTo && value <= this.parent.mileageTo;
    }),
    priceFrom: number().test('priceFrom', 'Price from should be less than price to', function (value) {
        return value && this.parent.priceTo && value <= this.parent.priceTo;
    }),
    // yearTo: number().test('yearTo', 'Year to should be more than year from', function (value) {
    //     console.log({ yearto: value, yearFrom: this.parent.yearFrom });

    //     return value && this.parent.yearFrom && value >= this.parent.yearFrom;
    // }),
    // mileageTo: number().test('mileageTo', 'Mileage to should be more than mileage from', function (value) {
    //     return value && this.parent.mileageFrom && value >= this.parent.mileageFrom;
    // }),
    // priceTo: number().test('priceTo', 'Price to should be more than price from', function (value) {
    //     return value && this.parent.priceFrom && value >= this.parent.priceFrom;
    // }),
})

export const USED_STATUSES_OPTIONS = Object.keys(USED_STATUSES).map((key) => ({
    label: key,
    value: USED_STATUSES[key as keyof typeof USED_STATUSES],
}))

// export const PERSONAL_INFO_FORM_TEMPLATE = [
//     { label: 'Name', name: 'contactInfoName', type: 'text', placeholder: 'Enter name' },
//     { label: 'Email', name: 'contactInfoEmail', type: 'email', placeholder: 'Enter email' },
//     { label: 'Phone Number', name: 'contactInfoPhoneNumber', type: 'text', placeholder: 'Enter phone number' },
//     { label: 'Lookup Address', name: 'contactInfoLookupAddress', type: 'text', placeholder: 'Enter address' },
// ] as const

// export const CAR_DETAILS_FORM_TEMPLATE = [
//     { label: 'Car VIN number', name: 'vin', type: 'text', placeholder: 'Enter VIN' },
//     { label: 'Mileage', name: 'mileage', type: 'number', placeholder: 'Enter Mileage of Car' },
// ] as const

// export const CAR_BOOLEANS_FORM_TEMPLATE = [
//     { label: 'Damaged', name: 'damaged' },
//     { label: 'Run And Go', name: 'runAndGo' },
//     { label: 'Under Warranty', name: 'underWarranty' },
//     { label: 'Clearance', name: 'clearance' },
// ] as const
