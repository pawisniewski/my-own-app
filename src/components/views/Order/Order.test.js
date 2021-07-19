import React from 'react';
import { shallow } from 'enzyme';
import Order from './Order';

describe('Component Order', () => {

  beforeAll(() => {
    const ReactRedux = jest.requireActual('react-redux');
    ReactRedux.useDispatch = jest.fn(() => null);
    ReactRedux.useSelector = jest.fn(() => []);
  });

  it('should render without crashing', () => {
    const component = shallow(<Order />);
    expect(component).toBeTruthy();
  });
  
});
