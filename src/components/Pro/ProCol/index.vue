<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-col v-slots={useSlots()}></a-col>)
</script>
