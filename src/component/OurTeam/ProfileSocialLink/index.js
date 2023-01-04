import React from 'react'
import { NavLink } from 'react-bootstrap'
import classes from '../index.module.scss'

const ProfileSocialLink = () => {
  return (
    <ul className={classes.socialLink}>
    <li><NavLink to="#" className='shadow'><i class="fa-brands fa-facebook-f"></i></NavLink></li>
    <li><NavLink to="#" className='shadow'><i class="fa-brands fa-twitter"></i></NavLink> </li>
    <li><NavLink to="#" className='shadow'><i class="fa-brands fa-linkedin-in"></i></NavLink></li>
    </ul>
  )
}

export default ProfileSocialLink