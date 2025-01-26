<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-transfer v-slots={useSlots()}></a-transfer>)
</script>
