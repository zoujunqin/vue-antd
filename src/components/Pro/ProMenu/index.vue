<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-menu v-slots={useSlots()}></a-menu>)
</script>
