<template>
    <status-code :status-code="statusCode"/>
</template>

<script>
    import StatusCode from '@/components/StatusCode.vue';

    export default {
        name: 'StatusCodes',
        components: {
            StatusCode
        },
        computed: {
            statusCode() {
                const { $statusCodes } = this;
                const { value } = this.$route.params;

                return $statusCodes.find(statusCode => statusCode.value == value);
            }
        }
    };
</script>
