<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-avatar v-slots={useSlots()}></a-avatar>)
</script>
