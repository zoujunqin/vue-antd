<script setup lang="jsx">
    import { h } from 'vue'
    import Navs from '@/views/components/Navs.vue'
    import HTTP from './HTTP.vue'
    import TCPIP from './TCPIP.vue'
    import WebSocket from './WebSocket.vue'

    const navs = $ref([
        { name: 'TCP/IP', component: TCPIP },
        { name: 'HTTP', component: HTTP },
        { name: 'WebSocket', component: WebSocket }
    ])
    let currentNav = $ref()

    defineRender(
        <div class="h-full flex gap-x-[10px]">
            <Navs v-model:active={currentNav} navs={navs}></Navs>

            <div class="flex-1">{h(currentNav?.component)}</div>
        </div>
    )
</script>
