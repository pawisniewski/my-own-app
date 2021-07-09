import React from 'react';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const product = {
      id: '123',
      name: 'Product1',
      price: 99,
      mainImage: {
        src: 'loremipsum.jpg',
        name: 'image1',
      },
    };
    const component = shallow(<ProductBox product={product} />);
    expect(component).toBeTruthy();
  });
});
