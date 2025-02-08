<script setup lang="jsx">
    import { useRoute, useRouter } from 'vue-router'
    import { AI, BITCOIN, FRONTEND } from '../router/names'

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
        }
    ]

    defineRender(
        <div class="flex items-center gap-x-[20px]">
            {menus.map(menu => {
                return (
                    <div class="flex items-center gap-x-[6px]" onClick={menu.handler}>
                        <span class="text-white opacity-60 hover:opacity-100 cursor-pointer" class={{ 'opacity-100': route.name === menu.routerName }}>
                            {menu.name}
                        </span>
                    </div>
                )
            })}
        </div>
    )
</script>
