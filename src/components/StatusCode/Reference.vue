<template>
    <cite class="status-code-reference">
        <a :href="url">{{ citation }}</a>
    </cite>
</template>

<script>
    import * as debracketify from 'debracketify';

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
            citation() {
                return debracketify(this.reference);
            },
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

<style lang="scss">
    .status-code-reference {
        font-style: normal;

        ::after {
            content: ' ]';
        }

        ::before {
            content: '[ ';
        }
    }
</style>
