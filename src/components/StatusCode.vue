<template>
    <div title="Status Code" class="status-code">
        <dt :id="value" class="status-code__value">
            <dfn title="Value" class="status-code__value-dfn">
                {{ value }}
            </dfn>
        </dt>

        <dd title="Description" class="status-code__description">
            {{ description }}
        </dd>

        <dd title="References" class="status-code__references">
            <ul class="status-code__references-list">
                <li v-for="reference in references" :key="reference" class="status-code__reference-item">
                    <status-code-reference :reference="reference"/>
                </li>
            </ul>
        </dd>
    </div>
</template>

<script>
    import StatusCodeReference from '@/components/StatusCode/Reference.vue';

    export default {
        name: 'StatusCode',
        components: {
            StatusCodeReference
        },
        props: {
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

                    return Object.keys(value).every(key => keys.includes(key));
                }
            }
        },
        computed: {
            description() {
                return this.statusCode.description;
            },
            reference() {
                return this.statusCode.reference;
            },
            references() {
                return this.reference.match(/\[RFC\d{4}(?:\w|,| |\.)*\]/g);
            },
            value() {
                return this.statusCode.value;
            }
        }
    };
</script>

<style lang="scss">
    /// NOTE: The order of the Bootstrap imports is important!
    @import '~bootstrap/scss/functions';
    @import '~bootstrap/scss/variables';

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

    .status-code__reference {
        font-family: $font-family-monospace;
    }

    .status-code__references {
        margin-bottom: 0;
    }

    .status-code__references-list {
        list-style: none;
        padding-left: 0;

        :not(:first-child) {
            margin-top: 1rem;
        }
    }

    .status-code__value {
        clear: left;
        float: left;
        line-height: 3.5rem;

        ::after {
            content: '—';
            font-weight: normal;
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }

    .status-code__value-dfn {
        font-style: normal;
        font-weight: bolder;
    }
</style>
