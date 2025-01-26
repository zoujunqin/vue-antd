<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-card v-slots={useSlots()}></a-card>)
</script>
