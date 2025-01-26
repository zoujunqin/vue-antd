<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-radio v-slots={useSlots()}></a-radio>)
</script>
