import React from "react"
import ReactDOM from "react-dom"
import { App } from './App'
import configureStore from './store'
import { Provider } from 'react-redux'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("app"))
