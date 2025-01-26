<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-tag v-slots={useSlots()}></a-tag>)
</script>
