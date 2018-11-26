import React, { Component } from "react"
import { BillList, withExpenseHandlers } from "./BillList"
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { update } from 'lodash/fp'
import { Provider } from 'react-redux'
import Enzyme, { mount } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

class MockComponent extends Component {
  render() {
    return <div />
  }
}

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

  describe('withExpenseHandlers', () => {
    let wrapper, subject

    beforeEach(() => {
      const Enhanced = withExpenseHandlers(MockComponent)
      wrapper = mount(<Enhanced firestore={{ update: jest.fn() }} />)
      subject = wrapper.find(MockComponent)
    })

    it('should togglePaid', () => {
      expect(subject.prop('togglePaid')).toBeTruthy()

      subject.prop('togglePaid')(213, true)

      expect(wrapper.prop('firestore').update).toHaveBeenCalledWith(`expenses/213`, { paid: true })

    })
  })
})
