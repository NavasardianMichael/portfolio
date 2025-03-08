import { StoreProvider } from 'store/Provider'
import BgAvatar from 'components/BgAvatar/BgAvatar'
import Content from 'components/Content/Content'
import Menu from 'components/Menu/Menu'
import styles from './app.module.css'

function App() {
  return (
    <StoreProvider>
      <div className={styles.app}>
        <Menu />
        <Content />
        <BgAvatar />
      </div>
    </StoreProvider>
  )
}

export default App
