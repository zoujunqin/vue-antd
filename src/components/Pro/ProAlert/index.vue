<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-alert v-slots={useSlots()}></a-alert>)
</script>
