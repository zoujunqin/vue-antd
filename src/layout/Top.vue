<script setup lang="jsx">
    import { useRouter } from 'vue-router'
    import { DASHBOARD } from '../router/names'
    import Menu from './Menu.vue'
    import Status from './Status.vue'
    import Logo from '@/assets/svg/logo2.svg?component'

    const router = useRouter()
    const toDashboard = () => {
        router.push({ name: DASHBOARD })
    }

    defineRender(
        <div class="h-[76px] pt-[8px] pb-[8px] pl-[16px] pr-[16px] flex items-center gap-x-[60px] select-none">
            <div class="flex flex-nowrap items-center cursor-pointer" onClick={toDashboard}>
                <Logo class="w-[60px] h-[60px]"></Logo>
                <span class="text-white text-[24px] font-bold">Half</span>
            </div>

            <div class="flex-1 h-full flex justify-between items-center">
                <Menu></Menu>
                <Status></Status>
            </div>
        </div>
    )
</script>
