import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from '../Button.jsx';

describe('#Basic button test', () => {
  xit('should render correctly', () => {
    const button = shallow(<Button />)
    expect(button.contains(<button />)).to.equal(true);
  });
})
