<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-spin v-slots={useSlots()}></a-spin>)
</script>
