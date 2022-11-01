import avatar from 'assets/images/fake-avatar.jpeg'
import { useThemeMode } from 'hooks/useThemeMode';
import './avatar.css'

export default function Avatar () {
  
  const mode = useThemeMode()

  return (
    <div className={`avatar-wrapper ${mode === 'light' ? 'shadow' : 'border'}`}>
      <img src={avatar} />
      <h3 className='full-name'>Michael Navasardyan</h3>
    </div>
  );
}
