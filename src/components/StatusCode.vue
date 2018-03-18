<template>
    <li><strong>{{ value }}</strong> - {{ description }} {{ reference }}</li>
</template>

<script>
    export default {
        name: 'StatusCode',
        props: {
            value: Number,
            description: String,
            reference: String
        }
    }
</script>
