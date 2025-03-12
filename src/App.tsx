import { useEffect, useMemo } from 'react'
import { ThemeProvider } from '@mui/material'
import { selectIsPending, selectUIMode } from 'store/app/selectors'
import { selectResume } from 'store/resume/selectors'
import { getResumeThunk } from 'store/resume/thunks'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { setCssVariables } from 'helpers/functions/styles'
import { getDesignTokens } from 'helpers/functions/theme'
import BgAvatar from 'components/BgAvatar/BgAvatar'
import Content from 'components/Content/Content'
import Loader from 'components/Loader/Loader'
import Menu from 'components/Menu/Menu'
import styles from './app.module.css'

function App() {
  const dispatch = useAppDispatch()
  const isPending = useAppSelector(selectIsPending)
  const mode = useAppSelector(selectUIMode)
  const { primaryImageUrl } = useAppSelector(selectResume)

  const theme = useMemo(() => {
    setCssVariables(mode)
    return getDesignTokens(mode)
  }, [mode])

  useEffect(() => {
    dispatch(getResumeThunk())
  }, [dispatch])

  if (isPending || !primaryImageUrl) return <Loader />

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <Menu />
        <Content />
        <BgAvatar />
      </div>
    </ThemeProvider>
  )
}

export default App
