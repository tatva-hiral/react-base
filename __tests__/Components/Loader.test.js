import React from 'react';
import Loader from '../../src/components/Loader';

describe('Loader component test ', () => {
  test('render correctly--->', () => {
    const wrapper = shallow(<Loader />);
    wrapper.setProps({ isVisible: true, loaderType: '' });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ isVisible: false, loaderType: '' });
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.exists()).toBe(true);
  });
});
