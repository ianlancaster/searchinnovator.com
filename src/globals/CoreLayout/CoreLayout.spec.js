import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import CoreLayoutComponent from './CoreLayout.component'

describe('CORE LAYOUT TESTS', () => {
  const setup = () => {
    const props = {}

    const ComponentWrapper = shallow(<CoreLayoutComponent {...props} />)

    return {
      ComponentWrapper,
      props
    }
  }

  context('CoreLayout component', () => {
    const { ComponentWrapper, props } = setup()

    it('should render the CoreLayout component', () => {
      expect(ComponentWrapper).to.exist
    })
  })
})
