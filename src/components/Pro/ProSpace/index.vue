<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-space v-slots={useSlots()}></a-space>)
</script>
