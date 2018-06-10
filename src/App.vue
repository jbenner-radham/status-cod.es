<template>
    <main id="app">
        <dl class="app__definition-list">
            <dt class="app__title" title="HTTP Status Codes" aria-label="HTTP Status Codes">
                http_status_codes
            </dt>

            <dd class="app__definitions">
                <router-view/>
            </dd>
        </dl>
    </main>
</template>

<style lang="scss">
    /// NOTE: The order of the Bootstrap imports is important!
    @import '~bootstrap/scss/functions';
    @import '~bootstrap/scss/variables';
    @import '~bootstrap/scss/mixins';
    @import '~bootstrap/scss/reboot';

    $dark-color: #2b2b2b;

    #app {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        color: $dark-color;
        display: flex;
        font-size: 2.5rem;
        justify-content: space-around;
    }

    .app__definition-list {
        min-width: 85%;
    }

    .app__title {
        background-color: $dark-color;
        color: white;
        font-family: $font-family-monospace;
        padding: 1rem;
        text-align: right;

        &::after {
            content: '≔'; /// @see &coloneq;
            margin-left: -.5rem;
            margin-right: 1rem;
        }
    }
</style>
