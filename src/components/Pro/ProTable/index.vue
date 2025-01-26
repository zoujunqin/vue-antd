<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-table v-slots={useSlots()}></a-table>)
</script>
