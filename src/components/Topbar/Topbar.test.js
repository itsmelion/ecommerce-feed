import React from 'react';
import { render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Topbar from './Topbar';

let wrapper;

beforeEach(() => {
  wrapper = render(<Router><Topbar /></Router>);
});

it('Has a single button', () => {
  expect(wrapper.find('a').length).toEqual(1);
});

it('Has a link to List', () => {
  expect(wrapper.find('a').prop('href')).toEqual('/list');
});
