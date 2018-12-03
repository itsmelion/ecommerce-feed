import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import data from './ads.json';
import List from './List';

let wrapper;

/*
  The following IIFE is returns the amount of ads on data provided
  to later check if we rendered them all.
*/
const dataAmountItems = (() => {
  let sum = 0;
  data.forEach(({ ads }) => {
    sum += ads.length;
  });
  return sum;
})();

beforeEach(() => {
  wrapper = render(<Router><List /></Router>);
});

// More or less like an integration test
it('Amount of Items rendered match data provided', () => {
  expect(wrapper.find('li').length).toEqual(dataAmountItems);
});
