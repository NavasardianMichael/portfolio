import avatar from 'assets/images/fake-avatar.jpg'
import './avatar.css'

type T_Props = {}

export default function Avatar (props: T_Props) {
  return (
    <div className='avatar-wrapper'>
      <img src={avatar} />
      <h3 className='full-name'>Michael Navasardyan</h3>
    </div>
  );
}
