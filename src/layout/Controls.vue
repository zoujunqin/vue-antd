<script setup lang="jsx">
    import { useVModel } from '@vueuse/core'
    import pkg from '/package.json'

    const emits = defineEmits(['update:open'])
    const props = defineProps({
        open: { type: Boolean, default: false }
    })

    const open = useVModel(props, 'open', emits)

    defineRender(
        <ProDrawer v-model:open={open.value} title="控制中心" placement="right">
            <p>当前系统版本：{pkg.version}</p>
            <p>当前系统环境：{import.meta.env.MODE}</p>
        </ProDrawer>
    )
</script>
