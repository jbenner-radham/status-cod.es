<template>
    <li :id="value">
        <strong>{{ value }}</strong> - {{ description }}
        <span class="status-code__reference">{{ reference }}</span>
    </li>
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

<style>
    .status-code__reference {
        font-family: monospace;
    }
</style>
