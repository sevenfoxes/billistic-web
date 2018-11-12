import React from "react"
import { Header } from "./Header"
import ShallowRenderer from "react-test-renderer/shallow"

describe('Header', () => {
  it('should render without crashing', () => {
    const tree = new ShallowRenderer().render(<Header />)
    expect(tree).toMatchSnapshot()
  })
})
