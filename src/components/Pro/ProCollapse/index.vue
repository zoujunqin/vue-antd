<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-collapse v-slots={useSlots()}></a-collapse>)
</script>
