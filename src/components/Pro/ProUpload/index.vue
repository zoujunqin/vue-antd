<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-upload v-slots={useSlots()}></a-upload>)
</script>
