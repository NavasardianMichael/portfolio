import { useEffect } from 'react'
import { getResumeThunk } from 'store/resume/thunks'
import { useAppDispatch } from 'hooks/useAppDispatch'
import BgAvatar from 'components/BgAvatar/BgAvatar'
import Content from 'components/Content/Content'
import Menu from 'components/Menu/Menu'
import styles from './app.module.css'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getResumeThunk())
  }, [dispatch])

  return (
    <div className={styles.app}>
      <Menu />
      <Content />
      <BgAvatar />
    </div>
  )
}

export default App
