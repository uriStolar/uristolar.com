import React, { useEffect, useState } from 'react'
import ReactGA from 'react-ga'
import Avatar from './Avatar'
import Navbar from './Navbar'

const likes = ['to write software', 'JavaScript', 'Linux servers', 'the Web', 'InfoSec', 'Cyberpunk', 'the mountains', 'bicycles']
function useRandomize (arr, initial = 0, waitTime = 0) {
  const [randomIdx, setRandomIdx] = useState(initial)
  const [shouldWait, setShouldWait] = useState(false)

  const randomize = () => {
    if (shouldWait) return randomIdx
    setRandomIdx(Math.floor(Math.random() * arr.length))
    setShouldWait(true)
    const timeout = setTimeout(() => setShouldWait(false), waitTime)
    return () => clearTimeout(timeout)
  }
  return [randomIdx, randomize]
}

const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-142489920-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  })
  const [currentLike, setCurrentLike] = useRandomize(likes, 0, 777)

  return (
    <div className='container'>
      <Navbar randomize={useRandomize} />
      <section className='hero is-white-bis is-fullheight-with-navbar'>
        <div className='hero-body' onMouseMove={setCurrentLike}>
          <div className='container'>
            <Avatar />
            <p className='title is-size-1'>URI STOLAR</p>
            <p className='subtitle is-size-2'>{`Computer Systems Engineer`}</p>
            <p className='subtitle is-size-4'>{`Loves ${likes[currentLike]}`}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
