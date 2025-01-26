<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-mentions v-slots={useSlots()}></a-mentions>)
</script>
