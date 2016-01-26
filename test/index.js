import test from 'tape'
import {shallow} from 'enzyme'
import React from 'react'

test("basic arithmetic", assert => {
  assert.plan(1)
  assert.equal(1 + 1, 2)
})

test("client vs server", assert => {
  if (!process.env.npm_lifecycle_event) {
    assert.ok(process.browser)
  } else {
    assert.pass('No client')
  }
  assert.end()
})

const Fixture = props => <div>{props.content}</div>

test("react renderer", assert => {
  const msg = 'should render dummy content'
  const expected = '<div>dummy content</div>'
  const props = {
    content: 'dummy content'
  }
  const $ = shallow(<Fixture {...props} />)
  const output = $.html()

  assert.equal(output, expected, msg)
  assert.end()
})
