import React from 'react';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import City from '../components/City';
import store from '../redux/configureStore';

configure({ adapter: new Adapter() });
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/city',
  }),
}));

jest.mock('axios', () => []);

describe('<City Component />', () => {
  it('should render City Component', () => {
    shallow(
      <Provider store={store}>
        <City />
      </Provider>,
    );
  });
});
