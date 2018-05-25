<template>
    <div class="home row">
        <div class="col--left"/>
        <div class="col--middle">
            <dl>
                <status-code
                    v-for="statusCode in currentStatusCodes"
                    :key="statusCode.value"
                    :status-code="statusCode"
                />
            </dl>
        </div>
        <div class="col--right"/>
    </div>
</template>

<script>
    import axios from 'axios';
    import StatusCode from '@/components/StatusCode.vue';

    export default {
        name: 'StatusCodes',
        components: {
            StatusCode
        },
        data() {
            return {
                allStatusCodes: [],
                currentStatusCodes: []
            };
        },
        computed: {
            oneHundredSeries() {
                return this.allStatusCodes.filter(statusCode => {
                    return (statusCode.value >= 100 && statusCode.value < 200);
                });
            },
            twoHundredSeries() {
                return this.allStatusCodes.filter(statusCode => {
                    return (statusCode.value >= 200 && statusCode.value < 300);
                });
            },
            threeHundredSeries() {
                return this.allStatusCodes.filter(statusCode => {
                    return (statusCode.value >= 300 && statusCode.value < 400);
                });
            },
            fourHundredSeries() {
                return this.allStatusCodes.filter(statusCode => {
                    return (statusCode.value >= 400 && statusCode.value < 500);
                });
            },
            fiveHundredSeries() {
                return this.allStatusCodes.filter(statusCode => {
                    return (statusCode.value >= 500 && statusCode.value < 600);
                });
            }
        },
        async created() {
            try {
                const request = await axios.get('http-status-code-registry.json');
                this.allStatusCodes = this.currentStatusCodes = request.data;
            } catch (e) {
                console.error(e);
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
