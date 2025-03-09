import axios from "axios";
import { ENDPOINTS } from "./endpoints";

export const fetchDataBySheetName = async <T>(sheetName: string) => {
    const response = await axios.get<T>(
        `${ENDPOINTS.getSheet}/${import.meta.env.VITE_APP_SHEET_ID}/values/${sheetName + '!A1:N100'}/?key=${import.meta.env.VITE_APP_API_KEY}`
    );
    return response.data
}