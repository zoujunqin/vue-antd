<script setup lang="jsx">
    import { h } from 'vue'
    import DeepSeek from './components/deepseek/index.vue'
    import ChatGPT from './components/chatgpt/index.vue'
    import WXYY from './components/wxyy/index.vue'
    import DB from './components/db/index.vue'

    let currentCard = $ref({})
    const cards = [
        { name: 'deepseek', component: DeepSeek },
        { name: 'chatgpt', component: ChatGPT },
        { name: '文心一言', component: WXYY },
        { name: '豆包', component: DB }
    ]

    defineRender(
        <div class="h-full flex gap-x-[10px]">
            <div class="flex flex-col gap-y-[10px] px-[20px] h-full overflow-y-auto">
                {cards.map(card => {
                    return (
                        <ProCard
                            class="flex flex-shrink-0 items-center justify-center w-[200px] h-[40px] bg-[rgba(255,255,255,.8)] hover:bg-white hover:font-bold"
                            class={{ 'bg-white font-bold': card.name === currentCard?.name }}
                            hoverable={true}
                            onClick={() => {
                                currentCard = card
                            }}
                        >
                            {card.name}
                        </ProCard>
                    )
                })}
            </div>

            <div class="flex-1">{h(currentCard?.component)}</div>
        </div>
    )
</script>

<style scoped>
    :deep(.ant-card-body) {
        padding: 0;
    }
</style>
