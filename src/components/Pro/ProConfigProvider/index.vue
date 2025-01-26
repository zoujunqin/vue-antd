<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-config-provider v-slots={useSlots()}></a-config-provider>)
</script>
