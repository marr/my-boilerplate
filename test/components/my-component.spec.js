import test from 'tape'
import React from 'react'
import MyComponent from '../../src/components/my-component'
import {shallow} from 'enzyme'
import sinon from 'sinon'

test('MyComponent has button that fires a dom event for click', assert => {
  const handleClick = sinon.spy()
  const $ = shallow(<MyComponent onClick={handleClick}/>)

  assert.equal(handleClick.callCount, 0, 'handleClick should not have been called yet')

  $.simulate('click')

  assert.equal(handleClick.callCount, 1, 'handleClick should have been called')
  assert.end()
})
