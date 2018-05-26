<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    /// Taken from Bootstrap.
    /// @link https://github.com/twbs/bootstrap/blob/2ea0a9bba9880d50b9a898dd148cbe66b694e52d/scss/_variables.scss#L234
    $font-family-sans-serif: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    #app {
        font-family: $font-family-sans-serif;
        font-size: 2.5rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
    }
</style>
