import avatar from 'assets/images/avatar.jpeg'
import './bgAvatar.css'

type T_Props = {}

const BgAvatar: React.FC<T_Props> = (props) => {
  return (
    <div className='bgAvatar'>
        <img src={avatar} />
    </div>
  );
};

export default BgAvatar;
