<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-carousel v-slots={useSlots()}></a-carousel>)
</script>
