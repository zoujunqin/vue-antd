<script setup lang="jsx">
    import { useVModel } from '@vueuse/core'
    import pkg from '/package.json'

    const emits = defineEmits(['update:open'])
    const props = defineProps({
        open: { type: Boolean, default: false }
    })

    const open = useVModel(props, 'open', emits)

    defineRender(
        <ProDrawer v-model:open={open.value} title="Control Center" placement="right">
            <p>Current System Version：{pkg.version}</p>
            <p>Current System Environment：{import.meta.env.MODE}</p>
        </ProDrawer>
    )
</script>
