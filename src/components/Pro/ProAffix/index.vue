<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-affix v-slots={useSlots()}></a-affix>)
</script>
