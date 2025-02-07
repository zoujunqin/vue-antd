<script setup lang="jsx">
    import { useVModel } from '@vueuse/core'

    const emits = defineEmits(['update:open'])
    const props = defineProps({
        open: { type: Boolean, default: false }
    })

    const open = useVModel(props, 'open', emits)

    defineRender(
        <ProDrawer v-model:open={open.value} title="登录" placement="right">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </ProDrawer>
    )
</script>
