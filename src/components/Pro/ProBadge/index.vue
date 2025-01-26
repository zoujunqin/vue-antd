<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-badge v-slots={useSlots()}></a-badge>)
</script>
