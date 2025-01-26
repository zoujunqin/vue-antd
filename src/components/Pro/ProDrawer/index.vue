<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-drawer v-slots={useSlots()}></a-drawer>)
</script>
