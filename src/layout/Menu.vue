<script setup lang="jsx">
    import { useRoute, useRouter } from 'vue-router'
    import { AI, BITCOIN, ECMASCRIPT, FRONTEND, JAVASCRIPT, NETWORK_PROTOCOL, RESUME, VUE } from '../router/names'

    const route = useRoute()
    const router = useRouter()
    const menus = [
        {
            name: 'AI',
            routerName: AI,
            handler: () => {
                router.push({ name: AI })
            }
        },
        {
            name: 'Frontend',
            routerName: FRONTEND,
            handler: () => {
                router.push({ name: FRONTEND })
            }
        },
        {
            name: 'BitCoin',
            routerName: BITCOIN,
            handler: () => {
                router.push({ name: BITCOIN })
            }
        },
        {
            name: 'Javascript',
            routerName: JAVASCRIPT,
            handler: () => {
                router.push({ name: JAVASCRIPT })
            }
        },
        {
            name: 'Ecmascript',
            routerName: ECMASCRIPT,
            handler: () => {
                router.push({ name: ECMASCRIPT })
            }
        },
        {
            name: 'Network',
            routerName: NETWORK_PROTOCOL,
            handler: () => {
                router.push({ name: NETWORK_PROTOCOL })
            }
        },
        {
            name: 'Vue',
            routerName: VUE,
            handler: () => {
                router.push({ name: VUE })
            }
        },
        {
            name: 'Resume',
            routerName: RESUME,
            handler: () => {
                router.push({ name: RESUME })
            }
        }
    ]

    defineRender(
        <div class="flex items-center gap-x-[20px]">
            {menus.map(menu => {
                return (
                    <div class="flex items-center gap-x-[6px]" onClick={menu.handler}>
                        <span class="text-white opacity-60 hover:opacity-100 cursor-pointer" class={{ '!opacity-100': route.name === menu.routerName }}>
                            {menu.name}
                        </span>
                    </div>
                )
            })}
        </div>
    )
</script>
