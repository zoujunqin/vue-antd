<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-empty v-slots={useSlots()}></a-empty>)
</script>
