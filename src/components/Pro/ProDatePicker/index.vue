<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-date-picker v-slots={useSlots()}></a-date-picker>)
</script>
