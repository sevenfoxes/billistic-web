import React from "react"
import "./header.scss"
import { withState } from "recompose"

const enhance = withState('counter', 'setCounter', 0)

export const Header = enhance(({ counter, setCounter }) => {

  return (
    <div>
      Count: {counter}
      <button onClick={() => setCounter(n => n + 1)}>
        Click me
      </button>
    </div>
  )
})
