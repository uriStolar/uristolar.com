import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import acronyms from '../util/acronyms'

const Navbar = props => {
  const [currentAcronym, setCurrentAcronym] = props.randomize(acronyms, Math.floor(Math.random() * acronyms.length), 0)
  return (
    <nav
      className='navbar'
      role='navigation'
      aria-label='main navigation'
      onClick={setCurrentAcronym}
    >
      <div className='navbar-brand'>
        <div className='navbar-item'>
          <FontAwesomeIcon icon={faCode} />
          <span className='is-size-7'>&nbsp; {acronyms[currentAcronym]}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
