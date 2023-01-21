import React from 'react';
import renderer from 'react-test-renderer';
import Error from '../components/Error';

it('renders correctly', () => {
  const navbar = renderer
    .create(<Error />)
    .toJSON();
  expect(navbar).toMatchSnapshot();
});
