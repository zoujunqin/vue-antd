<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-popover v-slots={useSlots()}></a-popover>)
</script>
