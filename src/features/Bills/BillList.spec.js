import React from "react"
import { BillList } from "./BillList"
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { update } from 'lodash/fp'
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
          },
        ],
      },
    },
  }
  const mockStore = configureStore()
  let store

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should render without crashing', () => {
    const tree = renderer.create(<Provider store={store}><BillList /></Provider>)
    expect(tree).toMatchSnapshot()
  })

  it('should render a new line for each expense', () => {
    const moreState = update('firestore.ordered.expenses', e => ([
      ...e,
      {
        name: 'not bank',
        paid: true,
        amount: 20000,
        due: 1,
      },
    ]), initialState)
    store = mockStore(moreState)
    const tree = renderer.create(<Provider store={store}><BillList /></Provider>)
    expect(tree).toMatchSnapshot()
  })
})
