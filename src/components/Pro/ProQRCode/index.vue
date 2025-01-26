<script setup lang="jsx">
    import { useSlots } from 'vue'

    defineRender(<a-qrcode v-slots={useSlots()}></a-qrcode>)
</script>
