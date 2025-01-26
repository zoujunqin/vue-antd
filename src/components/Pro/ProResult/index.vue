<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-result v-slots={useSlots()}></a-result>)
</script>
