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
        const url = new URL('https://datatracker.ietf.org/doc/html/');

        if (!props.reference.startsWith('[RFC')) {
            url.pathname += debracketify(props.reference);

            return url.toString();
        }

        const re = /(?:RFC)(\d+)(?:, Section )?((\d+)?(.?\d+?)?(.?\d+)?)/;
        const [, rfc, section] = re.exec(props.reference) ?? [];

        url.pathname += `rfc${rfc}`;

        if (section) url.hash = `section-${section}`;

        return url.toString();
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
