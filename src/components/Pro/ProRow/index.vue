<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-row v-slots={useSlots()}></a-row>)
</script>
