<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-list v-slots={useSlots()}></a-list>)
</script>
