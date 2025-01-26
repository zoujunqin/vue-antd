<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-breadcrumb-separator v-slots={useSlots()}></a-breadcrumb-separator>)
</script>
