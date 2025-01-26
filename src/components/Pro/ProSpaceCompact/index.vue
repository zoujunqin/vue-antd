<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-space-compact v-slots={useSlots()}></a-space-compact>)
</script>
