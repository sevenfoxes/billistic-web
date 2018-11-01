import React from "react"
import CssBaseline from '@material-ui/core/CssBaseline'
import "./app.scss"
import { Header } from "./components/Header"

export const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
    </React.Fragment>
  )
}
