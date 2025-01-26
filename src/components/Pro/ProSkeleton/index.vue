<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-skeleton v-slots={useSlots()}></a-skeleton>)
</script>
