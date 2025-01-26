<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-breadcrumb-item v-slots={useSlots()}></a-breadcrumb-item>)
</script>
