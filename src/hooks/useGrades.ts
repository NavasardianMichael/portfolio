import { useMemo } from "react"
import { useTranslations } from "./useTranslations"

export const useGrades = () => {
    const translations = useTranslations()
    const grades = useMemo(() => ([
        translations.frontEndEngineer,
        translations.academicDegree,
        translations.hopelessOptimist
    ]), [translations])
    return grades
}