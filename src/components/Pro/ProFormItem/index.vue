<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-form-item v-slots={useSlots()}></a-form-item>)
</script>
