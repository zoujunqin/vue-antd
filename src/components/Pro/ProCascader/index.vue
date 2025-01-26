<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-cascader v-slots={useSlots()}></a-cascader>)
</script>
