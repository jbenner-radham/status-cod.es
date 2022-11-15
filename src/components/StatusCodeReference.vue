<script setup>
    import { computed } from 'vue';
    import debracketify from 'debracketify';

    const props = defineProps({
        reference: {
            type: String,
            default() {
                return '';
            }
        }
    });

    const citation = computed(() => debracketify(props.reference));
    const url = computed(() => {
        const re = /(?:RFC)(\d+)(?:, Section )?((\d+)?(.?\d+?)?(.?\d+)?)/;
        const [, rfc, section] = re.exec(props.reference) ?? [];

        return section
            ? `https://datatracker.ietf.org/doc/html/rfc${rfc}#section-${section}`
            : `https://datatracker.ietf.org/doc/html/rfc${rfc}`;
    });
</script>

<template>
    <cite class="status-code-reference">
        <a :href="url">{{ citation }}</a>
    </cite>
</template>

<style lang="scss">
    .status-code-reference {
        font-style: normal;

        &::after {
            content: ']';
        }

        &::before {
            content: '[';
        }
    }
</style>
