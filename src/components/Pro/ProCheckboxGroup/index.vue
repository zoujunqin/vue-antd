<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-checkbox-group v-slots={useSlots()}></a-checkbox-group>)
</script>
