import axios from "axios";
import { ENDPOINTS } from "./endpoints";
import { processResume } from "./processors";
import { SheetsAPIResonse } from "./types";

export const fetchDataBySheetName = async (sheetName: string) => {
    const response = await axios.get<SheetsAPIResonse>(
        `${ENDPOINTS.getSheet}/${import.meta.env.VITE_APP_SHEET_ID}/values/${sheetName + '!A1:N100'}/?key=${import.meta.env.VITE_APP_API_KEY}`
    );

    const processedResume = processResume(response.data)
    console.log({ processedResume });
    return processedResume
}