import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../Styles/Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <LinkedInIcon color='primary' />
        <GitHubIcon color='primary' />
        </div>
      <p style={{color:"white"}}>Made with <FavoriteIcon style={{ color:"red" }}/> &copy; Aman Gaur</p>
    </div>
  )
}

export default Footer
