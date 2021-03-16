import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import './sass/styles.scss'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

ReactGA.initialize('UA-142489920-1')
ReactGA.pageview(window.location.pathname + window.location.search)
serviceWorker.register();
ReactDOM.render(<App />, document.getElementById('root'))
