<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-calendar v-slots={useSlots()}></a-calendar>)
</script>
