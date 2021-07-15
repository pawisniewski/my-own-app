import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Component Navbar', () => {

  beforeAll(() => {
    const ReactRedux = jest.requireActual('react-redux');
    ReactRedux.useDispatch = jest.fn(() => null);
    ReactRedux.useSelector = jest.fn(() => []);
  });

  it('should render without crashing', () => {
    const component = shallow(<Navbar />);
    expect(component).toBeTruthy();
  });
  
});
