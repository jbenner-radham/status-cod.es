import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import StatusCodeReference from '@/components/StatusCode/Reference.vue';

describe('StatusCode/Reference.vue', function () {
    it('renders `props.reference` when passed', function () {
        const citation = 'RFC7231, Section 6.3.1';
        const reference = `[${citation}]`;
        const wrapper = shallowMount(StatusCodeReference, {
            propsData: { reference }
        });

        expect(wrapper.text()).to.equal(citation);
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
        const url = 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1';
        const wrapper = shallowMount(StatusCodeReference, {
            propsData: { reference }
        });

        expect(wrapper.vm.url).to.equal(url);
    });

    it.skip('generates a computed `url` property when passed a non-conforming reference', function () {
        const reference = 'Example';
        const url = '#';
        const wrapper = shallowMount(StatusCodeReference, {
            propsData: { reference }
        });

        expect(wrapper.vm.url).to.equal(url);
    });
});
