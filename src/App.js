import React from "react"
import ReactDOM from "react-dom"
import CssBaseline from '@material-ui/core/CssBaseline'
import "./app.scss"

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        And now we're cooking with gas
      </div>
    </React.Fragment>
  )
}
export default App
ReactDOM.render(<App />, document.getElementById("app"))
