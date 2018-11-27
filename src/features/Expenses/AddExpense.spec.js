import React from "react"
import { AddExpense } from "./AddExpense"
import ShallowRenderer from "react-test-renderer/shallow"

describe('AddExpense', () => {
  it('should render fine', () => {
    const tree = new ShallowRenderer().render(<AddExpense />)
    expect(tree).toMatchSnapshot()
  })
})
