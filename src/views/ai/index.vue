<script setup lang="jsx">
    import { h } from 'vue'

    import Navs from '../components/Navs.vue'
    import DeepSeek from './components/deepseek/index.vue'
    import ChatGPT from './components/chatgpt/index.vue'
    import WXYY from './components/wxyy/index.vue'
    import DB from './components/db/index.vue'

    let currentCard = $ref({})
    const navs = [
        { name: 'deepseek', component: DeepSeek },
        { name: 'chatgpt', component: ChatGPT },
        { name: '文心一言', component: WXYY },
        { name: '豆包', component: DB }
    ]

    defineRender(
        <div class="h-full flex gap-x-[10px]">
            <Navs v-model:active={currentCard} navs={navs}></Navs>

            <div class="flex-1">{h(currentCard?.component)}</div>
        </div>
    )
</script>

<style scoped>
    :deep(.ant-card-body) {
        padding: 0;
    }
</style>
