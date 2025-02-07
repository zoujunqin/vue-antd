<script setup lang="jsx">
    import { useRouter } from 'vue-router'
    import { AI, BITCOIN, FRONTEND } from '../router/names'

    const router = useRouter()
    const menus = [
        {
            name: 'AI',
            handler: () => {
                router.push({ name: AI })
            }
        },
        {
            name: 'Frontend',
            handler: () => {
                router.push({ name: FRONTEND })
            }
        },
        {
            name: 'BitCoin',
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
                        <span class="text-white opacity-60 hover:opacity-100 cursor-pointer">{menu.name}</span>
                    </div>
                )
            })}
        </div>
    )
</script>
