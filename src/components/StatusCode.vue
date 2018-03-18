<template>
    <li :id="value">
        <strong>{{ value }}</strong> - {{ description }}
        <span v-for="reference in splitReferences(reference)" :key="reference" class="status-code__reference">
            <status-code-reference :url="getReferenceUrl(reference)" :reference="reference"/>
        </span>
    </li>
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
                const rfc = [.../(?:RFC)(\d{4})/.exec(reference)].pop();
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

<style>
    .status-code__reference {
        font-family: monospace;
    }
</style>
