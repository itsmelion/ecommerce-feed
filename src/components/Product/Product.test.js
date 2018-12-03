import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';

// Mock core Data:
const product = {
  id: 'uniqueID',
  title: 'iPhone',
  city_label: 'Lisbon',
  created: '10  lut',
  description: 'Some nice phone',
  params: [['Brand', 'Apple']],
};

describe('Product renders properly', () => {
  const wrapper = shallow(
    <Product
      match={{ params: { product } }}
      location={{ state: product }}
    />,
  );

  it('has a huge, nice, super title', () => {
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h1').text()).toEqual('iPhone');
  });

  it('has juicy description', () => {
    expect(wrapper.find('.description').length).toEqual(1);
    expect(wrapper.find('.description').text()).toBe(product.description);
  });
});
