import React from 'react'
import classes from '../index.module.scss'

const ProfileSocialLink = () => {
  return (
    <ul className={classes.socialLink}>
    <li><a className='shadow' href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
    <li><a className='shadow' href="#"><i class="fa-brands fa-twitter"></i></a></li>
    <li><a className='shadow' href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
    </ul>
  )
}

export default ProfileSocialLink