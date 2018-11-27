import React from "react"
import { BillList } from "./ExpenseList"
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

describe('BillList', () => {
  const initialState = {
    firestore: {
      ordered: {
        expenses: [
          {
            name: 'bank',
            paid: false,
            amount: 20,
            due: 20,
            id: 321,
          },
          {
            name: 'not bank',
            paid: true,
            amount: 20000,
            due: 1,
            id: 123,
          },
        ],
      },
    },
  }

  let store

  beforeEach(() => {
    const mockStore = configureStore()
    store = mockStore(initialState)
  })

  it('should render a new line for each expense', () => {
    const tree = renderer.create(<Provider store={store}><BillList /></Provider>)
    expect(tree).toMatchSnapshot()
  })
})
