<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-button v-slots={useSlots()}></a-button>)
</script>
