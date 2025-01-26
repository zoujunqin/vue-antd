<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-radio-group v-slots={useSlots()}></a-radio-group>)
</script>
