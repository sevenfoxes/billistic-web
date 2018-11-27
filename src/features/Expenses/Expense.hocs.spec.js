import React from "react"
import { MockComponent } from '../MockComponent'
import { withExpenseHandlers, withExpenseData } from './Expense.hocs'
import Enzyme, { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const firestore = {
  update: jest.fn(),
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
}

describe('withExpenseHandlers', () => {
  let wrapper, subject

  beforeEach(() => {
    const Enhanced = withExpenseHandlers(MockComponent)
    wrapper = mount(<Enhanced firestore={{ update: firestore.update }} />)
    subject = wrapper.find(MockComponent)
  })

  it('should togglePaid', () => {
    expect(subject.prop('togglePaid')).toBeTruthy()

    subject.prop('togglePaid')(213, true)

    expect(wrapper.prop('firestore').update).toHaveBeenCalledWith(`expenses/213`, { paid: true })

  })
})

describe('withExpenseData', () => {
  let wrapper, subject, store

  beforeEach(() => {
    const mockStore = configureStore()
    store = mockStore({ firestore })
    const Enhanced = withExpenseData(MockComponent)
    wrapper = mount(<Provider store={store}><Enhanced /></Provider>)
    subject = wrapper.find(MockComponent)
  })

  it('should have the data', () => {
    expect(subject.props().expenses).toEqual(firestore.ordered.expenses)
  })
})
