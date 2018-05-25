<template>
    <div class="home row">
        <div class="col--left"/>
        <div class="col--middle">
            <dl>
                <status-code
                    v-for="statusCode in displayedStatusCodes"
                    :key="statusCode.value"
                    :status-code="statusCode"
                />
            </dl>
        </div>
        <div class="col--right"/>
    </div>
</template>

<script>
    import StatusCode from '@/components/StatusCode.vue';

    export default {
        name: 'StatusCodes',
        components: {
            StatusCode
        },
        props: {
            display: {
                type: [Number, String],
                default() {
                    return 'all';
                }
            }
        },
        data() {
            return {
                displayedStatusCodes: []
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
            }
        },
        created() {
            switch (this.display) {
            case 'all':
                this.displayedStatusCodes = this.$statusCodes;
                break;

            case '1xx':
                this.displayedStatusCodes = this.oneHundredSeries;
                break;

            case '2xx':
                this.displayedStatusCodes = this.twoHundredSeries;
                break;

            case '3xx':
                this.displayedStatusCodes = this.threeHundredSeries;
                break;

            case '4xx':
                this.displayedStatusCodes = this.fourHundredSeries;
                break;

            case '5xx':
                this.displayedStatusCodes = this.fiveHundredSeries;
                break;
            }
        }
    };
</script>

<style lang="scss">
    .col--left, .col--right {
        flex-grow: 1;
    }

    .col--middle {
        flex-grow: 3;
    }

    .row {
        display: flex;
    }
</style>
