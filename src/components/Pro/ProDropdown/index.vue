<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-dropdown v-slots={useSlots()}></a-dropdown>)
</script>
