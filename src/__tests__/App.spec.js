import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('shallow renders without crashing',  () => {
    shallow(<App />);
  })
  it('state is initialized', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('total')).toBe('0');
    expect(wrapper.state('next')).toBeFalsy();
    expect(wrapper.state('operation')).toBeFalsy();
  });
});
