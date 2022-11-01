import avatar from 'assets/images/fake-avatar.jpeg'
import { FC } from 'react';
import './bgAvatar.css'

const BgAvatar: FC = () => {
  return (
    <div className='bgAvatar'>
      <img src={avatar} />
    </div>
  );
};

export default BgAvatar;
