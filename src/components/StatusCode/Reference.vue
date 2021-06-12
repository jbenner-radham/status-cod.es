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
            url() {
                const re = /(?:RFC)(\d+)(?:, Section )?((\d.?)?(\d.?)?(\d)?)/;
                const [, rfc, section] = re.exec(this.reference);

                return section
                    ? `https://datatracker.ietf.org/doc/html/rfc${rfc}#section-${section}`
                    : `https://datatracker.ietf.org/doc/html/rfc${rfc}`;
            }
        }
    };
</script>

<style lang="scss">
    .status-code-reference {
        font-style: normal;

        &::after {
            content: ' ]';
        }

        &::before {
            content: '[ ';
        }
    }
</style>
