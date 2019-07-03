import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitterSquare, faLinkedin, faOsi } from '@fortawesome/free-brands-svg-icons'

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
      <div className='level-right is-size-7'>
        <span className='icon is-medium'>
          <FontAwesomeIcon className='fas fa-2x' icon={faOsi} />
        </span>
        Licensed under
        <a rel='license' href='https://www.gnu.org/licenses/gpl-3.0.txt'>
          &nbsp;GNU General Public License V3
        </a>.
      </div>
    </footer>
  </div>
)

export default Footer