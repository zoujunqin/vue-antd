<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-menu-item v-slots={useSlots()}></a-menu-item>)
</script>
