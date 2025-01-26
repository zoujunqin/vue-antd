<template>
    <div>
        <ProButton @click="count++">count is: {{ count }}</ProButton>
        <p>
            Edit <code>components/HelloWorld.vue</code> to test hot module
            replacement.
        </p>
    </div>
</template>

<script setup>
let count = $ref(0)
</script>
