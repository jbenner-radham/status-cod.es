import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import StatusCodeReference from '../StatusCodeReference.vue';

describe('StatusCodeReference.vue', () => {
    it('renders `props.reference` when passed', function () {
        const citation = 'RFC7231, Section 6.3.1';
        const reference = `[${citation}]`;
        const wrapper = shallowMount(StatusCodeReference, {
            props: { reference }
        });

        expect(wrapper.text()).to.equal(citation);
    });

    it('renders `props.reference` when passed a non-conforming reference', () => {
        const reference = 'Example';
        const wrapper = shallowMount(StatusCodeReference, {
            props: { reference }
        });

        expect(wrapper.text()).to.equal(reference);
    });

    it('generates a computed `url` property', () => {
        const reference = '[RFC7231, Section 6.3.1]';
        const url = 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1';
        const wrapper = shallowMount(StatusCodeReference, {
            props: { reference }
        });

        expect(wrapper.find('a').attributes('href')).to.equal(url);
    });

    it.skip('generates a computed `url` property when passed a non-conforming reference', () => {
        const reference = 'Example';
        const url = '#';
        const wrapper = shallowMount(StatusCodeReference, {
            props: { reference }
        });

        expect(wrapper.find('a').attributes('href')).to.equal(url);
    });
});
