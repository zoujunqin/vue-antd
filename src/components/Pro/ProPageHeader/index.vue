<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-page-header v-slots={useSlots()}></a-page-header>)
</script>
