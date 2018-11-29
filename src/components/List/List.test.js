import React from 'react';
import { render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import data from 'ads.json';
import List from './List';

let wrapper;

beforeEach(() => {
  wrapper = render(<Router><List /></Router>);
});

// More or less like an integration test
it('Amount of Items rendered match data provided', () => {
  const dataAmountItems = (() => {
    let sum = 0;
    data.forEach(({ ads }) => {
      sum += ads.length;
    });
    return sum;
  })();

  expect(wrapper.find('li').length).toEqual(dataAmountItems);
});
