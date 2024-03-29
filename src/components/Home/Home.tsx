import { GRADES } from 'constants/about';
import { HTML_SYMBOLS } from 'constants/symbols';
import { FC, useEffect, useState } from 'react';
import styles from './home.module.css'

const Home: FC = () => {

    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [currentTextPosition, setCurrentTextPosition] = useState(0)
    const [blinkingClassName, setBlinkingClassName] = useState('')
    const [isIncrementing, setIncrementingStatus] = useState(true)

    const increasePosition = () => setCurrentTextPosition(prev => prev + 1)

    const decreasePosition = () => setCurrentTextPosition(prev => prev - 1)

    useEffect(() => {
        let directionTm: NodeJS.Timeout
        if(currentTextPosition === (isIncrementing ? GRADES[currentTextIndex].length : 0)) {
            if(currentTextPosition === 0) setCurrentTextIndex(prev => GRADES[prev + 1] ? prev + 1 : 0)
            directionTm = setTimeout(() => {
                setBlinkingClassName('')
                setIncrementingStatus(prev => !prev)
            }, 2000)
            return setBlinkingClassName(styles.blinking)
        }

        const positionTm = setTimeout(() => {
            isIncrementing ? increasePosition() : decreasePosition()
        }, 100)

        return () => {
            clearTimeout(positionTm)
            clearTimeout(directionTm)
        }
    }, [currentTextPosition, isIncrementing])

    return (
        <div id='home' className={styles.home}>
            <h1 className={styles['home-full-name']}>Michael Navasardyan</h1>
            <h2 className={styles['profession-wrapper']}>
                I'm{HTML_SYMBOLS.space}
                <span className={styles['profession']}>{GRADES[currentTextIndex].slice(0, currentTextPosition)}</span>
                <span className={blinkingClassName}>|</span>
            </h2>
        </div>
    );
};

export default Home;
