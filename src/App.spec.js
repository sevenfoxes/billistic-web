import React from "react"
import { App } from "./App"
import ShallowRenderer from "react-test-renderer/shallow"

describe('App', () => {
  it('should render without crashing', () => {
    const tree = new ShallowRenderer().render(<App />)
    expect(tree).toMatchSnapshot()
  })
})
