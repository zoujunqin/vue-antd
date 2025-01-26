<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-descriptors v-slots={useSlots()}></a-descriptors>)
</script>
