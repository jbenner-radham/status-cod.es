<template>
    <div id="app">
        <ul v-for="statusCode in currentStatusCodes" :key="statusCode.value">
            <status-code :value="statusCode.value"
                :description="statusCode.description"
                :reference="statusCode.reference"/>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    import StatusCode from './components/StatusCode.vue'

    // const inRange = (number, gte, lt) => (number >= gte && number < lt);

    export default {
        name: 'app',
        components: {
            StatusCode
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
        data() {
            return {
                allStatusCodes: [],
                currentStatusCodes: []
            }
        },
        async created() {
            try {
                const request = await axios.get('http-status-code-registry.json');
                this.allStatusCodes = this.currentStatusCodes = request.data;
            } catch (e) {
                console.error(e)
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    ul {
        list-style: none;
    }
</style>
