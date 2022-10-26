import Avatar from 'components/Avatar/Avatar'
import { Footer } from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import Socials from 'components/Socials/Socials'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Modal } from '@mui/material';
import { Box } from '@mui/system';
import './sidebar.css'

type T_Props = {}

export default function Sidebar (props: T_Props) {
  return (
    <div className='sidebar-wrapper'>
      <IconButton onClick={handleOpen}>
        <MenuIcon color='secondary' />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

        </Box>
      <div className='sidebar'>
        <Avatar />
        <Socials />
        <Navbar />
        <Footer />
      </div>
    </div>
  )
}
