import React from "react"
import { BillList } from "./BillList"
import ShallowRenderer from "react-test-renderer/shallow"
import configureStore from 'redux-mock-store' //ES6 modules

describe('BillList', () => {
  let initialState, store, firestore, mockStore

  beforeEach(() => {
    mockStore = configureStore([])

    firestore = {
      ordered: {
        expenses: [
          {
          },
        ],
      },
    }

    initialState = {
      firestore,
    }

    store = mockStore(initialState)
  })

  it('should render without crashing', () => {
    const tree = new ShallowRenderer().render(<BillList store={store} />)
    expect(tree).toMatchSnapshot()
  })
})
