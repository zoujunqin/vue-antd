<script setup lang="jsx">
    import { h } from 'vue'
    import Navs from '@/views/components/Navs.vue'
    import Closure from '@/views/javascript/Closure.vue'
    import EventLoop from '@/views/javascript/EventLoop.vue'
    import GC from '@/views/javascript/GC.vue'
    import Scope from '@/views/javascript/Scope.vue'
    import WebWorker from '@/views/javascript/WebWorker.vue'
    import ServiceWorker from '@/views/javascript/ServiceWorker.vue'
    import PromiseComponent from '@/views/javascript/Promise.vue'
    import PrototypeChain from '@/views/javascript/PrototypeChain.vue'

    const navs = $ref([
        { name: 'Closure', component: Closure },
        { name: 'Event Loop', component: EventLoop },
        { name: 'GC', component: GC },
        { name: 'Scope', component: Scope },
        { name: 'WebWorker', component: WebWorker },
        { name: 'ServiceWorker', component: ServiceWorker },
        { name: 'Promise', component: PromiseComponent },
        { name: 'PrototypeChain', component: PrototypeChain }
    ])
    let currentNav = $ref()

    defineRender(
        <div class="h-full flex gap-x-[10px]">
            <Navs v-model:active={currentNav} navs={navs}></Navs>

            <div class="flex-1">{h(currentNav?.component)}</div>
        </div>
    )
</script>
