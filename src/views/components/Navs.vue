<script setup lang="jsx">
    import { h } from 'vue'
    import { useVModel } from '@vueuse/core'

    const props = defineProps({
        active: {
            type: Object,
            default: () => ({})
        },
        navs: {
            type: Array,
            default: () => []
        }
    })
    const emits = defineEmits(['update:active'])

    const currentCard = useVModel(props, 'active', emits)

    defineRender(
        <div class="flex flex-col gap-y-[10px] px-[20px] h-full overflow-y-auto">
            {props.navs.map(card => {
                return (
                    <ProCard
                        class="flex flex-shrink-0 items-center justify-center w-[200px] h-[40px] bg-[rgba(255,255,255,.8)] hover:bg-white hover:font-bold"
                        class={{ 'bg-white font-bold': card.name === currentCard.value?.name }}
                        hoverable={true}
                        onClick={() => {
                            currentCard.value = card
                        }}
                    >
                        {card.name}
                    </ProCard>
                )
            })}
        </div>
    )
</script>

<style scoped>
    :deep(.ant-card-body) {
        padding: 0;
    }
</style>
