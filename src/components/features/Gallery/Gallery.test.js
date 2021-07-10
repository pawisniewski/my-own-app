import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';

describe('Component Gallery', () => {
  it('should render without crashing', () => {
    const images = [{
      name: 'image1',
      src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },{
      name: 'image2',
      src: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },{
      name: 'image3',
      src: 'https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    ];
    const component = shallow(<Gallery images={images}/>);
    expect(component).toBeTruthy();
  });
});
