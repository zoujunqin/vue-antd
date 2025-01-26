<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-float-button v-slots={useSlots()}></a-float-button>)
</script>
