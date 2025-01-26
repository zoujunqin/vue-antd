<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-switch v-slots={useSlots()}></a-switch>)
</script>
