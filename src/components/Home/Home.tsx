import { useEffect, useState } from 'react';
import './home.css'

type T_Props = {}

const Home: React.FC<T_Props> = (props) => {

    const texts = [
        'Front-End Engineer',
        'PhD student',
        'Hopeless Optimist',
    ]
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [currentTextPosition, setCurrentTextPosition] = useState(0)
    const [blinkingClassName, setBlinkingClassName] = useState('')
    const [isIncrementing, setIncrementingStatus] = useState(true)

    const increasePosition = () => setCurrentTextPosition(prev => prev + 1)

    const decreasePosition = () => setCurrentTextPosition(prev => prev - 1)

    useEffect(() => {
        let directionTm: NodeJS.Timeout
        if(currentTextPosition === (isIncrementing ? texts[currentTextIndex].length : 0)) {
            if(currentTextPosition === 0) setCurrentTextIndex(prev => texts[prev + 1] ? prev + 1 : 0)
            directionTm = setTimeout(() => {
                setBlinkingClassName('')
                setIncrementingStatus(prev => !prev)
            }, 1000)
            return setBlinkingClassName('blinking')
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
        <div className='home'>
            <h1 className='full-name'>Michael Navasardyan</h1>
            <h2 className='profession-wrapper'>
                I'm&nbsp; 
                <span className='profession'>{texts[currentTextIndex].slice(0, currentTextPosition)}</span>
                <span className={blinkingClassName}>|</span>
            </h2>
            
        </div>
    );
};

export default Home;