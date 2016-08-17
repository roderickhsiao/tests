jest.unmock('../Button.jsx');

import React from 'react';

import { shallow, mount } from 'enzyme';
import Button from '../Button.jsx';

describe('#Basic button test', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Button/>);
    const buttonNode = wrapper.find(Button);
    expect(buttonNode.name()).toEqual('Button');
  });
})
