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
            <status-code
                v-for="statusCode in range.values"
                :key="statusCode.value"
                :status-code="statusCode"
            />
        </dd>
    </div>
</template>

<script>
    import StatusCode from '@/components/StatusCode.vue';

    export default {
        name: 'StatusCodeRange',
        components: {
            StatusCode
        },
        props: {
            range: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        data() {
            return {
                registryUrl: 'https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml'
            };
        }
    };
</script>

<style lang="scss">
    /// NOTE: The order of the Bootstrap imports is important!
    @import '~bootstrap/scss/functions';
    @import '~bootstrap/scss/variables';

    .status-code-range__description {
        color: lighten($color: #000000, $amount: 32%);
        display: flex;
        font: {
            family: $font-family-monospace;
            style: italic;
        }
    }

    .status-code-range__term {
        border-bottom: {
            width: thin;
            style: dashed;
            color: black;
        }
    }

    .status-code-range__term--name {
        font-size: 5rem;
    }
</style>
