<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-tree v-slots={useSlots()}></a-tree>)
</script>
