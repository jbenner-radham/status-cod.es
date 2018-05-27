<template>
    <section class="status-code">
        <dt :id="value" class="status-code__value">
            <h3>{{ value }}</h3>
        </dt>
        <dd class="status-code__description">
            {{ description }}
        </dd>
        <ul class="status-code__references">
            <li v-for="reference in references" :key="reference" class="status-code__reference">
                <status-code-reference :reference="reference"/>
            </li>
        </ul>
    </section>
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

    .status-code {
        margin: 2.5rem;
    }

    .status-code__reference {
        font-family: $font-family-monospace;
    }

    .status-code__references {
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
</style>
