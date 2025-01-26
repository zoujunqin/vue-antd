<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-form v-slots={useSlots()}></a-form>)
</script>
