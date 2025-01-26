<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-auto-complete v-slots={useSlots()}></a-auto-complete>)
</script>
