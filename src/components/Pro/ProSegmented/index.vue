<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-segmented v-slots={useSlots()}></a-segmented>)
</script>
