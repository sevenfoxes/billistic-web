import React from "react"
import { AddBill } from "./AddBill"
import ShallowRenderer from "react-test-renderer/shallow"

describe('AddBill', () => {
  it('should render fine', () => {
    const tree = new ShallowRenderer().render(<AddBill />)
    expect(tree).toMatchSnapshot()
  })
})
