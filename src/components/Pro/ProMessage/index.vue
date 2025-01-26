<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-message v-slots={useSlots()}></a-message>)
</script>
