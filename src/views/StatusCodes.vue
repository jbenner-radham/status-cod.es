<template>
    <div class="status-codes">
        <status-code-range
            v-for="range in displayedRanges"
            :range="range"
            :key="range.name"
        />
    </div>
</template>

<script>
    import StatusCodeRange from '@/components/StatusCode/Range.vue';

    export default {
        name: 'StatusCodes',
        components: {
            StatusCodeRange
        },
        props: {
            display: {
                type: String,
                default() {
                    return 'all';
                }
            }
        },
        data() {
            return {
                displayedRanges: []
            };
        },
        computed: {
            oneHundredSeries() {
                return this.$statusCodes.filter(statusCode => {
                    return (statusCode.value >= 100 && statusCode.value < 200);
                });
            },
            twoHundredSeries() {
                return this.$statusCodes.filter(statusCode => {
                    return (statusCode.value >= 200 && statusCode.value < 300);
                });
            },
            threeHundredSeries() {
                return this.$statusCodes.filter(statusCode => {
                    return (statusCode.value >= 300 && statusCode.value < 400);
                });
            },
            fourHundredSeries() {
                return this.$statusCodes.filter(statusCode => {
                    return (statusCode.value >= 400 && statusCode.value < 500);
                });
            },
            fiveHundredSeries() {
                return this.$statusCodes.filter(statusCode => {
                    return (statusCode.value >= 500 && statusCode.value < 600);
                });
            },
            ranges() {
                return [
                    {
                        name: '1xx',
                        class: 'Informational',
                        description: 'Request received, continuing process',
                        values: this.oneHundredSeries
                    },
                    {
                        name: '2xx',
                        class: 'Successful',
                        description: 'The action was successfully received, understood, and accepted',
                        values: this.twoHundredSeries
                    },
                    {
                        name: '3xx',
                        class: 'Redirection',
                        description: 'Further action must be taken in order to complete the request',
                        values: this.threeHundredSeries
                    },
                    {
                        name: '4xx',
                        class: 'Client Error',
                        description: 'The request contains bad syntax or cannot be fulfilled',
                        values: this.fourHundredSeries
                    },
                    {
                        name: '5xx',
                        class: 'Server Error',
                        description: 'The server failed to fulfill an apparently valid request',
                        values: this.fiveHundredSeries
                    }
                ];
            }
        },
        created() {
            const { display } = this.$route.params;

            this.displayedRanges = (!display)
                ? this.ranges
                : this.ranges.filter(range => display == range.name);
        }
    };
</script>

<style lang="scss">

</style>
