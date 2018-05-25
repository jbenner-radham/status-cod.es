<template>
    <a :href="url">{{ reference }}</a>
</template>

<script>
    export default {
        name: 'StatusCodeReference',
        props: {
            reference: {
                type: String,
                default() {
                    return '';
                }
            }
        },
        computed: {
            rfc() {
                const matches = /(?:RFC)(\d{4})/.exec(this.reference) || [];
                const rfc = matches.pop();
                const radix = 10;

                return parseInt(rfc, radix);
            },
            url() {
                return !isNaN(this.rfc)
                    ? `https://www.ietf.org/rfc/rfc${this.rfc}.txt`
                    : '#';
            }
        }
    };
</script>
