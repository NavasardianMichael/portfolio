import { createPortal } from 'react-dom'
import './portal.css'

type Props = {
    opened: boolean
    children: JSX.Element
}

const Portal = ({ opened, children }: Props) => {
    if (!opened) return null
    return createPortal(    
      <div className='portal'>
        {children}
      </div>,
      document.getElementById('portal') as HTMLElement
    )
}

export default Portal