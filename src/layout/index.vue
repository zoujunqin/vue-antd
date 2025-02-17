<script setup lang="jsx">
    import { provide } from 'vue'
    import { globalDataProvideKey } from '../keys/provide'
    import { useGlobalData } from '../hooks/useGlobalData'

    import Top from './Top.vue'
    import Main from './Main.vue'

    provide(globalDataProvideKey, useGlobalData())

    defineRender(
        <div class="layout flex flex-col h-full">
            <ProConfigProvider>
                <Top></Top>
                <Main></Main>
            </ProConfigProvider>
        </div>
    )
</script>

<style scoped>
    .layout {
        background-image: url('@/assets/bg.webp');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
