import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme'
import Header from './Header';

configure({ adapter: new Adapter() });

describe('Header Component', () => {
    it('It should render without errors', () => {
        const component = shallow(<Header />);
        const wrapper = component.find('.isCollapsed');
        expect(wrapper.length).toBe(4);
    });
})