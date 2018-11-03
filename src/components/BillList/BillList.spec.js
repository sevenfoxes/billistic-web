import React from "react"
import { BillList } from "./BillList"
import ShallowRenderer from "react-test-renderer/shallow"

describe('BillList', () => {
  it('should render without crashing', () => {
    const tree = new ShallowRenderer().render(<BillList />)
    expect(tree).toMatchSnapshot()
  })
})
