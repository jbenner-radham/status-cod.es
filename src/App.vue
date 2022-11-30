<script setup>
    import { RouterView } from 'vue-router';
</script>

<template>
    <main class="app">
        <dl class="app__definition-list">
            <dt class="app__title">HTTP Status Codes</dt>

            <dd class="app__definitions">
                <router-view />
            </dd>
        </dl>
    </main>
    <footer>
        <small>
            <p>
                This site's <a href="https://github.com/jbenner-radham/status-cod.es">source code</a> is licensed under
                the <a rel="license" href="http://opensource.org/licenses/MIT">MIT License (Expat)</a>.
            </p>
            <p>Made by <a href="https://www.jamesbenner.com">James Benner</a>.</p>
        </small>
    </footer>
</template>

<style lang="scss">
    /// NOTE: The order of the Bootstrap imports is important!
    @import 'bootstrap/scss/functions';
    @import 'bootstrap/scss/variables';
    @import 'bootstrap/scss/mixins';
    @import 'bootstrap/scss/maps';
    @import 'bootstrap/scss/root';
    @import 'bootstrap/scss/reboot';

    $dark-color: #2b2b2b;
    $light-color: #ffffff;

    footer {
        text-align: center;
        margin-bottom: 1rem;
    }

    .app {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        color: $dark-color;
        display: flex;
        font-size: 2.5rem;
        justify-content: space-around;
    }

    .app__definition-list {
        width: 85%;
    }

    .app__title {
        background-color: $dark-color;
        color: $light-color;
        font-family: $font-family-monospace;
        padding: 1rem;
        text-align: right;

        &::after {
            content: ' ≔'; /// @see &coloneq;
            margin: {
                left: -0.5rem;
                right: 1rem;
            }
        }
    }

    @media (prefers-color-scheme: dark) {
        body {
            background-color: invert($color: $light-color);
        }

        footer {
            color: invert($color: $dark-color);
        }

        .app {
            color: invert($color: $dark-color);
        }

        .app__title {
            color: invert($color: $light-color);
            background-color: invert($color: $dark-color);
        }
    }

    @media all and (max-width: 414px) {
        .app {
            font-size: 0.85rem;
        }
    }
</style>
