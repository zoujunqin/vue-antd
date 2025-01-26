<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-progress v-slots={useSlots()}></a-progress>)
</script>
