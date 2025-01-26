<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-steps v-slots={useSlots()}></a-steps>)
</script>
