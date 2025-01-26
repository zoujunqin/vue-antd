<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-breadcrumb v-slots={useSlots()}></a-breadcrumb>)
</script>
