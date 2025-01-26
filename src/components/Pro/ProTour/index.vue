<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-tour v-slots={useSlots()}></a-tour>)
</script>
