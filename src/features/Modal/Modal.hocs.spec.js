import React from "react"
import { MockComponent } from '../MockComponent'
import { withModalState } from './Modal.hocs'
import Enzyme, { mount } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })


describe('withModalState', () => {
  let wrapper

  beforeEach(() => {
    const Enhanced = withModalState(MockComponent)
    wrapper = mount(<Enhanced />)
  })

  it('should have a showModal prop set to false', () => {
    expect(wrapper.find(MockComponent).prop("showModal")).toEqual(false)
  })

  it('should set showModal to true', () => {
    wrapper.find(MockComponent).prop("openModal")()
    wrapper.update()
    expect(wrapper.find(MockComponent).prop("showModal")).toEqual(true)
  })

  it('should set showModal to false', () => {
    wrapper.find(MockComponent).prop("openModal")()
    wrapper.update()
    wrapper.find(MockComponent).prop("closeModal")()
    wrapper.update()
    expect(wrapper.find(MockComponent).prop("showModal")).toEqual(false)
  })
})
