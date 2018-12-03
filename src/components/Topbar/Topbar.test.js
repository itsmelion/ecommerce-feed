import React from 'react';
import { render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Topbar from './Topbar';

const wrapper = render(<Router><Topbar /></Router>);
const homeButton = wrapper.find('a');

it('Has a single button', () => {
  expect(homeButton.length).toEqual(1);
});

it('Has a link to List', () => {
  expect(homeButton.prop('href')).toEqual('/list');
});

it('Has class .menu-logo', () => {
  expect(homeButton.hasClass('menu-logo')).toBeTruthy();
});
