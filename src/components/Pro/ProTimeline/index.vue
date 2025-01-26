<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-timeline v-slots={useSlots()}></a-timeline>)
</script>
