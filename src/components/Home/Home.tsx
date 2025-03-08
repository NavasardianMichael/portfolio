import { FC, useEffect, useState } from 'react'
import { selectCharacteristics } from 'store/resume/selectors'
import { useAppSelector } from 'hooks/useAppSelector'
import { HTML_SYMBOLS } from 'helpers/constants/symbols'
import styles from './home.module.css'

const Home: FC = () => {
  const characteristics = useAppSelector(selectCharacteristics)

  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentTextPosition, setCurrentTextPosition] = useState(0)
  const [blinkingClassName, setBlinkingClassName] = useState('')
  const [isIncrementing, setIncrementingStatus] = useState(true)

  const increasePosition = () => setCurrentTextPosition((prev) => prev + 1)

  const decreasePosition = () => setCurrentTextPosition((prev) => prev - 1)
  console.log({ currentTextPosition, currentTextIndex })

  useEffect(() => {
      let directionTm: NodeJS.Timeout
      if(!characteristics[currentTextIndex]) {
        return
      };
    if (currentTextPosition === (isIncrementing ? characteristics[currentTextIndex].length : 0)) {
      if (currentTextPosition === 0) setCurrentTextIndex((prev) => (characteristics[prev + 1] ? prev + 1 : 0))
      directionTm = setTimeout(() => {
        setBlinkingClassName('')
        setIncrementingStatus((prev) => !prev)
      }, 2000)
      return setBlinkingClassName(styles.blinking)
    }

    const positionTm = setTimeout(() => {
      if (isIncrementing) return increasePosition()
      decreasePosition()
    }, 100)

    return () => {
      clearTimeout(positionTm)
      clearTimeout(directionTm)
    }
  }, [characteristics, currentTextIndex, currentTextPosition, isIncrementing])

  return (
    <div id="home" className={styles.home}>
      <h1 className={styles['home-full-name']}>Michael Navasardyan</h1>
      <h2 className={styles['profession-wrapper']}>
        I'm{HTML_SYMBOLS.space}
        <span className={styles['profession']}>{characteristics?.[currentTextIndex]?.slice?.(0, currentTextPosition) ?? 'N/A'}</span>
        <span className={blinkingClassName}>|</span>
      </h2>
    </div>
  )
}

export default Home
