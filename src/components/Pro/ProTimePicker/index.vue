<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-time-picker v-slots={useSlots()}></a-time-picker>)
</script>
