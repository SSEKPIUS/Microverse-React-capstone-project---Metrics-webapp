import React from 'react';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CityList from '../components/CitiesList';
import store from '../redux/configureStore';

configure({ adapter: new Adapter() });
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/citylist',
  }),
}));

jest.mock('axios', () => []);

describe('<CityList Component />', () => {
  it('should render City List Component', () => {
    shallow(
      <Provider store={store}>
        <CityList />
      </Provider>,
    );
  });
});
