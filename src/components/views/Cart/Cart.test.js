import React from 'react';
import { shallow } from 'enzyme';
import Cart from './Cart';

describe('Component Cart', () => {

  beforeAll(() => {
    const ReactRedux = jest.requireActual('react-redux');
    ReactRedux.useDispatch = jest.fn(() => null);
    ReactRedux.useSelector = jest.fn(() => []);
  });

  it('should render without crashing', () => {
    const component = shallow(<Cart />);
    expect(component).toBeTruthy();
  });
  
});
