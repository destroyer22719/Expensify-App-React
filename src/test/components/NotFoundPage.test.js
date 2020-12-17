import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound';
import "../setupTest";

test('testing the not found page to work properly', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});
