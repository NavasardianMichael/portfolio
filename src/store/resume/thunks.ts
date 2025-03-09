import { STATE_SLICE_NAMES } from "helpers/constants/store"
import { createAppAsyncThunk } from "helpers/functions/store"
import { ResumeSlice } from "./types"
import { fetchDataBySheetName } from "api/sheets/api"
import { setResumeOptions } from "./slice"

export const getResumeThunk = createAppAsyncThunk<ResumeSlice, void>(
    `${STATE_SLICE_NAMES.resume}/getResumeThunk`,
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const resume = await fetchDataBySheetName('Sheet1')
            dispatch(setResumeOptions(resume))
            return resume
        } catch (e) {
            return rejectWithValue(e as Error)
        }
    }
)