<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-collapse-item v-slots={useSlots()}></a-collapse-item>)
</script>
