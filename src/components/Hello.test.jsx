import React from 'react';
import renderer from 'react-test-renderer';
import Hello from './Hello';

describe('Hello', () => {
  it('should render Hello component', () => {
    const tree = renderer.create(<Hello />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
