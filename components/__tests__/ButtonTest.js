jest.unmock('../Button.jsx');

import React from 'react';
import ReactDOM from 'react-dom';

import TestUtils from 'react-addons-test-utils';
import Button from '../Button.jsx';

describe('#Basic button test', () => {
  it('should render correctly', () => {
    const button = TestUtils.renderIntoDocument(
      <Button/>
    );
    const buttonNode = ReactDOM.findDOMNode(button);
    expect(buttonNode.nodeName).toEqual('BUTTONA');
  });
})
