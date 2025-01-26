<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-image v-slots={useSlots()}></a-image>)
</script>
