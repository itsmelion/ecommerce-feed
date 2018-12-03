import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import ListItem from './ListItem';

let wrapper;

// Mock core Data:
const product = {
  title: 'iPhone X',
  id: 'uniqueID',
  city_label: 'Lisbon',
};

beforeEach(() => {
  wrapper = render(<Router><ListItem product={product} /></Router>);
});

describe('ListItem fundamental data is present', () => {
  it('has a title', () => {
    expect(wrapper.find('h4').text()).toEqual('iPhone X');
  });

  it('has a link', () => {
    expect(wrapper.find('a[href]').length).toBeTruthy();
  });

  it('link matches the "path/ID"', () => {
    expect(wrapper.find('a').attr('href')).toEqual('/list/uniqueID');
  });
});

describe('ListItem has its complemental components/elements', () => {
  it('image has fallback', () => {
    expect(product.image).toBeFalsy();
    expect(wrapper.find('img').attr('src')).toBeTruthy();
  });

  it('Has Legend component', () => {
    expect(wrapper.find('legend').length).toBeTruthy();
  });
});
