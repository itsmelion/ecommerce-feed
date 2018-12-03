import React from 'react';
import { render } from 'enzyme';
import ProductParameters from './ProductParameters';

const param = ['title', 'description'];
const wrapper = render(<ProductParameters param={param} />);

it('rendered param title', () => {
  expect(wrapper.text()).toContain(param[0]);
});

it('rendered param value', () => {
  expect(wrapper.text()).toContain(param[1]);
});
