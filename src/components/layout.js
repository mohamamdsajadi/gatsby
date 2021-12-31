import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'
import  { picture , div }  from '../components/picture.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <div className= {div}>
        <ul className= {navLinks} >
          <li className={navLinkItem}>
            <Link to= "/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/About" className={navLinkText}>
              About
            </Link>
          </li>
          <li><StaticImage className={picture} src='../images/gatsby-icon.png' alt='hello'
            /></li>
        </ul>
        </div>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout