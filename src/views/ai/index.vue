<script setup lang="jsx">
    const cards = [
        { name: 'deepseek', handler: () => {} },
        { name: 'chatgpt', handler: () => {} },
        { name: '文心一言', handler: () => {} },
        { name: '豆包', handler: () => {} }
    ]

    defineRender(
        <div class="h-full flex gap-x-[10px]">
            <div class="flex flex-col gap-y-[10px] h-full overflow-y-auto">
                {cards.map(card => {
                    return (
                        <ProCard
                            class="flex flex-shrink-0 items-center justify-center w-[200px] h-[40px] bg-[rgba(255,255,255,.8)] hover:bg-white hover:font-bold"
                            hoverable={true}
                            onClick={card.handler}
                        >
                            {card.name}
                        </ProCard>
                    )
                })}
            </div>

            <div class="flex-1"></div>
        </div>
    )
</script>

<style scoped>
    :deep(.ant-card-body) {
        padding: 0;
    }
</style>
