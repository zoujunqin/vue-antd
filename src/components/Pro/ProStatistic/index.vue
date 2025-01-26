<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-statistic v-slots={useSlots()}></a-statistic>)
</script>
