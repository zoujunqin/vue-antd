<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-checkbox v-slots={useSlots()}></a-checkbox>)
</script>
