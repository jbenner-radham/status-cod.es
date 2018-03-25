<template>
    <div class="status-code">
        <dt :id="value" class="status-code__value">
            <strong>{{ value }}</strong>
        </dt>
        <dd class="status-code__description">
            {{ description }}
        </dd>
        <ul class="status-code__references">
            <li v-for="reference in splitReferences(reference)" :key="reference" class="status-code__reference">
                <status-code-reference :url="getReferenceUrl(reference)" :reference="reference"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import StatusCodeReference from './StatusCodeReference.vue'

    export default {
        name: 'StatusCode',
        props: {
            value: Number,
            description: String,
            reference: String
        },
        components: {
            StatusCodeReference
        },
        methods: {
            getRfcNumber(reference = '') {
                const rfc = /(?:RFC)(\d{4})/.exec(reference).pop();
                const radix = 10;

                return parseInt(rfc, radix);
            },
            getReferenceUrl(reference = '') {
                const rfc = this.getRfcNumber(reference);

                return `https://www.ietf.org/rfc/rfc${rfc}.txt`;
            },
            splitReferences(reference = '') {
                return reference.match(/\[RFC\d{4}(?:\w|,| |\.)*\]/g);
            }
        }
    }
</script>

<style lang="scss">
    .status-code {
        margin: 2.5rem;
    }

    .status-code__reference {
        font-family: monospace;
    }

    .status-code__references {
        list-style: none;
        padding-left: 0;

        :not(:first-child) {
            margin-top: 1rem;
        }
    }

    .status-code__value {
        float: left;
        clear: left;

        ::after {
            content: '—';
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }
</style>
