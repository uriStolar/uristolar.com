import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import CCLicense from './CCLicense'

const Footer = () => (
  <div className=''>
    <footer className='footer level'>
      <div className='buttons level-left'>
        <a className='button icon is-medium' href='https://twitter.com/suservibar'>
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a className='button icon is-medium' href='https://github.com/uriStolar'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className='button icon is-medium' href='https://www.linkedin.com/in/uri-stolar-b541a9a1/'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className='button is-size-6' href='https://blog.uristolar.com'>
          Blog
        </a>
      </div>
      <div className='level-right'>
        <CCLicense />
      </div>
    </footer>
  </div>
)

export default Footer
