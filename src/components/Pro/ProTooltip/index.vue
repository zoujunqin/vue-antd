<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-tooltip v-slots={useSlots()}></a-tooltip>)
</script>
