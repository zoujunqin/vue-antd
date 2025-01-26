<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-notification v-slots={useSlots()}></a-notification>)
</script>
