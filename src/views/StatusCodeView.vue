<script setup>
    import { computed, inject } from 'vue';
    import { useRoute } from 'vue-router';
    import StatusCode from '../components/StatusCode.vue'; // eslint-disable-line no-unused-vars

    const statusCode = computed(() => {
        const route = useRoute();
        const { value } = route.params;
        const statusCodes = inject('statusCodes');

        return statusCodes.find((statusCode) => statusCode.value == value);
    });
</script>

<template>
    <status-code :status-code="statusCode" />
</template>
