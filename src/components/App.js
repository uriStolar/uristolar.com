import React, { useState } from 'react'
import Avatar from './Avatar'
import Navbar from './Navbar'
import Footer from './Footer'
import likes from './../util/likes'

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
  const [currentLike, setCurrentLike] = useRandomize(likes, 0, 777)

  return (
    <div className='container'>
      <Navbar randomize={useRandomize} />
      <section className='hero is-white-bis is-small'>
        <div className='hero-body' onMouseMove={setCurrentLike}>
          <div className='container'>
            <Avatar />
            <p className='title is-size-1'>URI STOLAR</p>
            <p className='subtitle is-size-2'>{`Computer Systems Engineer`}</p>
            <p className='subtitle is-size-4'>{`Loves ${likes[currentLike]}`}</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
