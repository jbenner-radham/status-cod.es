import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import StatusCodeReference from '@/components/StatusCodeReference.vue';

describe('StatusCodeReference.vue', () => {
    it('renders `props.reference` when passed', () => {
        const reference = 'Example';
        const wrapper = shallowMount(StatusCodeReference, {
            propsData: { reference }
        });

        expect(wrapper.text()).to.include(reference);
    });

    it('renders `props.url` when passed', () => {
        const url = 'http://www.example.com/';
        const wrapper = shallowMount(StatusCodeReference, {
            propsData: { url }
        });

        expect(wrapper.html()).to.include(`href="${url}"`);
    });
});
