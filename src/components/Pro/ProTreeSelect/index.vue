<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-tree-select v-slots={useSlots()}></a-tree-select>)
</script>
