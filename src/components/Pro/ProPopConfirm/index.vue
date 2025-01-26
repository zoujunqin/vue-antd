<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-popconfirm v-slots={useSlots()}></a-popconfirm>)
</script>
