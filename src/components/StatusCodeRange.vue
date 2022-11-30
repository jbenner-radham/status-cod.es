<script setup>
    import StatusCode from './StatusCode.vue';

    defineProps({
        range: {
            type: Object,
            default() {
                return {
                    name: '',
                    class: '',
                    description: ''
                };
            }
        }
    });

    const registryUrl = 'https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml';
</script>

<template>
    <div class="status-code-range">
        <dt :id="range.name" class="status-code-range__term">
            <span class="status-code-range__term--name">
                {{ range.name }}
            </span>

            <span class="status-code-range__term--class">
                {{ range.class }}
            </span>
        </dt>

        <dd>
            <q :cite="registryUrl" class="status-code-range__description">
                {{ range.description }}
            </q>
        </dd>

        <dd>
            <status-code v-for="statusCode in range.values" :key="statusCode.value" :status-code="statusCode" />
        </dd>
    </div>
</template>

<style lang="scss">
    /// NOTE: The order of the Bootstrap imports is important!
    @import 'bootstrap/scss/functions';
    @import 'bootstrap/scss/variables';

    .status-code-range__term:target::before {
        content: '➭ ';
    }

    .status-code-range__description {
        color: lighten($color: #000000, $amount: 32%);
        font-style: italic;
    }

    .status-code-range__term {
        border-bottom: {
            width: thin;
            style: dashed;
            color: black;
        }
    }

    .status-code-range__term--class {
        margin-left: 1rem;
    }

    .status-code-range__term--name {
        font-size: 5rem;
    }

    @media (prefers-color-scheme: dark) {
        .status-code-range__description {
            color: invert($color: lighten($color: #000000, $amount: 32%));
        }

        .status-code-range__term {
            border-bottom: {
                color: #fff;
            }
        }
    }
</style>
