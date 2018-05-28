<template>
    <main id="app">
        <dl class="profile">
            <dt class="app__title">
                HTTP Status Codes
            </dt>

            <dd>
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

    $dark-color: #2c3e50;

    #app {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        color: $dark-color;
        display: flex;
        font-family: $font-family-sans-serif;
        font-size: 2.5rem;
        justify-content: space-around;
    }

    .app__title {
        background-color: $dark-color;
        color: white;
        padding: 1rem;
    }
</style>
