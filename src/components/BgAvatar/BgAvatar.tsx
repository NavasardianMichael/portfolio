import avatar from 'assets/images/fake-avatar.jpeg'
import { FC } from 'react';
import './bgAvatar.css'

const BgAvatar: FC = () => {
  return (
    <div className='bgAvatar'>
      <img src={avatar} data-testid='avatar-img' alt='avatar' />
    </div>
  )
}

export default BgAvatar;
