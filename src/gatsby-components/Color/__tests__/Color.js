import React from 'react';
import Color from '../Color';
import renderer from 'react-test-renderer';

test('Test color component', () => {
  global.navigator = jest.fn();

  const component = renderer.create(
    <Color color="blue" />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});