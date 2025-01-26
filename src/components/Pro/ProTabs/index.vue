<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-tabs v-slots={useSlots()}></a-tabs>)
</script>
