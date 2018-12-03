import React from 'react';
import { render } from 'enzyme';
import ProductLegend from './ProductLegend';

const city = 'Braga';
let wrapper = render(<ProductLegend city={city} />);

describe('core Legend component', () => {
  it('has a heart! 💜', () => {
    expect(wrapper.find('.wishlist').length).toEqual(1);
  });

  it('rendered the city', () => {
    const address = wrapper.find('address');
    expect(address.length).toEqual(1);
    expect(address.text()).toContain(city);
  });
});

describe('Time component', () => {
  it('ommited time', () => {
    expect(wrapper.find('time').length).toEqual(0);
  });

  it('rendered time', () => {
    wrapper = render(<ProductLegend city={city} time="Sábado, 10am" />);
    const timeElement = wrapper.find('time');
    expect(timeElement.length).toEqual(1);
    expect(timeElement.text()).toBe('Sábado, 10am');
  });
});
