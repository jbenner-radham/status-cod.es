<script setup>
    import { computed, inject, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import StatusCodeRange from '../components/StatusCodeRange.vue';

    const statusCodes = inject('statusCodes');

    const displayedRanges = ref([]);

    const oneHundredSeries = computed(() => {
        return statusCodes.filter((statusCode) => {
            return statusCode.value >= 100 && statusCode.value < 200;
        });
    });
    const twoHundredSeries = computed(() => {
        return statusCodes.filter((statusCode) => {
            return statusCode.value >= 200 && statusCode.value < 300;
        });
    });
    const threeHundredSeries = computed(() => {
        return statusCodes.filter((statusCode) => {
            return statusCode.value >= 300 && statusCode.value < 400;
        });
    });
    const fourHundredSeries = computed(() => {
        return statusCodes.filter((statusCode) => {
            return statusCode.value >= 400 && statusCode.value < 500;
        });
    });
    const fiveHundredSeries = computed(() => {
        return statusCodes.filter((statusCode) => {
            return statusCode.value >= 500 && statusCode.value < 600;
        });
    });
    const ranges = computed(() => {
        return [
            {
                name: '1xx',
                class: 'Informational',
                description: 'Request received, continuing process',
                values: oneHundredSeries.value
            },
            {
                name: '2xx',
                class: 'Successful',
                description: 'The action was successfully received, understood, and accepted',
                values: twoHundredSeries.value
            },
            {
                name: '3xx',
                class: 'Redirection',
                description: 'Further action must be taken in order to complete the request',
                values: threeHundredSeries.value
            },
            {
                name: '4xx',
                class: 'Client Error',
                description: 'The request contains bad syntax or cannot be fulfilled',
                values: fourHundredSeries.value
            },
            {
                name: '5xx',
                class: 'Server Error',
                description: 'The server failed to fulfill an apparently valid request',
                values: fiveHundredSeries.value
            }
        ];
    });

    const route = useRoute();
    const { display } = route.params;

    displayedRanges.value = !display ? ranges.value : ranges.value.filter((range) => display == range.name);
</script>

<template>
    <div class="status-codes">
        <status-code-range v-for="range in displayedRanges" :range="range" :key="range.name" />
    </div>
</template>
