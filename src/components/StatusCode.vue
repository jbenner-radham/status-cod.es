<script setup>
    import { computed } from 'vue';
    import StatusCodeReference from './StatusCodeReference.vue';

    const props = defineProps({
        statusCode: {
            type: Object,
            default() {
                return {
                    description: '',
                    reference: '',
                    value: NaN
                };
            },
            validator(value) {
                const keys = ['description', 'reference', 'value'];

                return Object.keys(value).every((key) => keys.includes(key));
            }
        }
    });

    const description = computed(() => props.statusCode.description);
    const references = computed(() => props.statusCode.reference.match(/\[.+\]/g));
    const value = computed(() => props.statusCode.value);
</script>

<template>
    <div property="http:Response" class="status-code">
        <dt :id="value" property="http:statusCodeValue" class="status-code__value">
            <dfn title="Value" class="status-code__value-dfn">
                {{ value }}
            </dfn>
        </dt>

        <dd property="http:reasonPhrase" class="status-code__description">
            {{ description }}
        </dd>

        <dd class="status-code__reference">
            <status-code-reference v-for="reference in references" :key="reference" :reference="reference" />
        </dd>
    </div>
</template>

<style lang="scss">
    /// NOTE: The order of the Bootstrap imports is important!
    @import 'bootstrap/scss/functions';
    @import 'bootstrap/scss/variables';

    .status-code__value:target::before {
        content: '➭ ';
    }

    /// > In order to annotate groups with microdata attributes, or other global
    /// > attributes that apply to whole groups, or just for styling purposes,
    /// > each group in a dl element can be wrapped in a div element.
    ///
    /// @link https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element
    .status-code {
        margin: 2.5rem;
    }

    .status-code__description {
        margin-bottom: 0;
    }

    .status-code__value {
        clear: left;
        float: left;
        line-height: 3.5rem;

        &::after {
            content: '—'; /// @see &mdash;
            font-weight: normal;
            margin: {
                left: 1rem;
                right: 1rem;
            }
        }
    }

    .status-code__value-dfn {
        font: {
            style: normal;
            weight: bolder;
        }
    }
</style>
