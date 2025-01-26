<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-comment v-slots={useSlots()}></a-comment>)
</script>
