import avatar from 'assets/images/main-avatar.jpeg'
import { useTheme } from "@mui/material";
import './avatar.css'

export default function Avatar () {
  const themeContext = useTheme()
  return (
    <div className={`avatar-wrapper ${themeContext.palette.mode === 'light' ? 'shadow' : 'border'}`}>
      <img src={avatar} />
      <h3 className='full-name'>Michael Navasardyan</h3>
    </div>
  );
}
