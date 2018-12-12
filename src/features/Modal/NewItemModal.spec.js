import React from "react"
import ShallowRenderer from "react-test-renderer/shallow"
import NewItemModal, { enhance } from './NewItemModal'
import { MockComponent } from '../MockComponent'

import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })


describe('NewItemModal', () => {
  it('should match the snapshot', async () => {
    const tree = new ShallowRenderer().render(<NewItemModal />)
    expect(tree).toMatchSnapshot()
  })
})

describe('enhanced component', () => {
  it('should have all the enhancements', async () => {
    const Enhanced = enhance(MockComponent)
    const wrapper = mount(<Enhanced />)
    const mockEvent = {
      target: {
        value: 'some crap',
      },
    }
    let subject = wrapper.find(MockComponent)

    expect(subject.prop('itemType')).toEqual('expense')
    expect(typeof subject.prop('updateItemType')).toEqual('function')

    subject.prop('updateItemType')(mockEvent)
    wrapper.update()
    subject = wrapper.find(MockComponent)

    expect(subject.prop('itemType')).toEqual(mockEvent.target.value)
  })
})
