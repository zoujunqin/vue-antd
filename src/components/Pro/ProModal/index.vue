<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-modal v-slots={useSlots()}></a-modal>)
</script>
