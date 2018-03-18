<template>
    <a :href="url">{{ reference }}</a>
</template>

<script>
    export default {
        name: 'StatusCodeReference',
        props: {
            url: String,
            reference: String
        }
    }
</script>
