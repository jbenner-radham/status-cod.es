import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import StatusCodeReference from '@/components/StatusCodeReference.vue';

describe('StatusCodeReference.vue', function () {
    it('renders `props.reference` when passed', function () {
        const reference = '[RFC7231, Section 6.3.1]';
        const wrapper = shallowMount(StatusCodeReference, {
            propsData: { reference }
        });

        expect(wrapper.text()).to.equal(reference);
    });

    it('renders `props.reference` when passed a non-conforming reference', function () {
        const reference = 'Example';
        const wrapper = shallowMount(StatusCodeReference, {
            propsData: { reference }
        });

        expect(wrapper.text()).to.equal(reference);
    });

    it('generates a computed `url` property', function () {
        const reference = '[RFC7231, Section 6.3.1]';
        const url = 'https://www.ietf.org/rfc/rfc7231.txt';
        const wrapper = shallowMount(StatusCodeReference, {
            propsData: { reference }
        });

        expect(wrapper.vm.url).to.equal(url);
    });

    it('generates a computed `url` property when passed a non-conforming reference', function () {
        const reference = 'Example';
        const url = '#';
        const wrapper = shallowMount(StatusCodeReference, {
            propsData: { reference }
        });

        expect(wrapper.vm.url).to.equal(url);
    });
});
