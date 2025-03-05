import { AsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'helpers/types/store'
import {
    getDriveTypesThunk,
    getEngineTypesThunk,
    getModelsThunk,
    getModificationsThunk,
    getTransmissionsThunk,
    getYearsThunk,
} from 'store/miniEntities/thunk'
import { MiniEntity } from 'store/miniEntities/types'
import { PostForm } from './post'

export const FIELD_DEPENDENCY_LOADERS: Partial<
    Record<
        keyof PostForm,
        {
            nextFieldNames: (keyof PostForm)[]
            prevFieldName: keyof PostForm
            nextEntityLoader?: AsyncThunk<MiniEntity[], PostForm, ThunkConfig>
        }
    >
> = {
    brandId: {
        nextFieldNames: ['modelId', 'year', 'engineId', 'carDriveTypeId', 'transmissionId', 'modificationId'],
        prevFieldName: 'brandId',
        nextEntityLoader: getModelsThunk,
    },
    modelId: {
        nextFieldNames: ['year', 'engineId', 'carDriveTypeId', 'transmissionId', 'modificationId'],
        prevFieldName: 'brandId',
        nextEntityLoader: getYearsThunk,
    },
    year: {
        nextFieldNames: ['engineId', 'carDriveTypeId', 'transmissionId', 'modificationId'],
        prevFieldName: 'modelId',
        nextEntityLoader: getEngineTypesThunk,
    },
    engineId: {
        nextFieldNames: ['carDriveTypeId', 'transmissionId', 'modificationId'],
        prevFieldName: 'year',
        nextEntityLoader: getDriveTypesThunk,
    },
    carDriveTypeId: {
        nextFieldNames: ['transmissionId', 'modificationId'],
        prevFieldName: 'engineId',
        nextEntityLoader: getTransmissionsThunk,
    },
    transmissionId: {
        nextFieldNames: ['modificationId'],
        prevFieldName: 'carDriveTypeId',
        nextEntityLoader: getModificationsThunk,
    },
    modificationId: {
        nextFieldNames: [],
        prevFieldName: 'transmissionId',
    },
}

// export const MINI_ENTITY_NAME_BY_FIELD_NAME: Partial<Record<keyof PostForm, keyof MiniEntitiesSlice>> = {
//     modelId: 'models',
//     year: 'years',
//     engineId: 'engineTypes',
//     carDriveTypeId: 'driveTypes',
//     transmissionId: 'transmissionTypes',
// }
