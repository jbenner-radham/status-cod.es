<template>
    <div class="home row">
        <div class="col--left"/>
        <div class="col--middle">
            <dl class="profile" prefix="registry: https://www.iana.org/assignments/http-status-codes/">
                <dt>HTTP Status Codes</dt>
                <dd>
                    <div v-for="range in ranges" :key="range.name">
                        <dt :id="range.name" class="status-code-range">
                            <span class="status-code-range__name">
                                {{ range.name }}
                            </span>
                            <span class="status-code-range__class">
                                {{ range.class }}
                            </span>
                        </dt>
                        <dd>
                            <q cite="registry:http-status-codes.xml">
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
                </dd>
            </dl>
        </div>
        <div class="col--right"/>
    </div>
</template>

<script>
    /** @see https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element */
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
                        values: this.oneHundredSeries
                    },
                    {
                        name: '5xx',
                        class: 'Server Error',
                        description: 'The server failed to fulfill an apparently valid request',
                        values: this.oneHundredSeries
                    }
                ];
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
    q {
        display: flex;
    }

    .col--left, .col--right {
        flex-grow: 1;
    }

    .col--middle {
        flex-grow: 3;
    }

    .row {
        display: flex;
    }

    .status-code-range {
        border-bottom-width: thin;
        border-bottom-style: dashed;
        border-bottom-color: black;
    }

    .status-code-range__name {
        font-size: 5rem;
    }

    .status-code-range__class {
        ::after {
            content: ')';
        }

        ::before {
            content: '(';
        }
    }
</style>
