<script setup lang="jsx">
    import UserIcon from '@/assets/svg/user.svg?component'
    import MoreIcon from '@/assets/svg/more.svg?component'
    import Controls from './Controls.vue'
    import Login from './Login.vue'

    let controlPanelVisible = $ref(false)
    const openControlPanel = () => {
        controlPanelVisible = true
    }

    let loginPanelVisible = $ref(false)
    const openLoginPanel = () => {
        loginPanelVisible = true
    }

    defineRender(
        <div class="flex items-center gap-x-[20px]">
            <div class="flex items-center gap-x-[6px] text-white opacity-60 hover:opacity-100 cursor-pointer" onClick={openLoginPanel}>
                <span class="text-white">登录</span>
                <UserIcon class="w-[20px] h-[20px]"></UserIcon>
            </div>

            <MoreIcon class="w-[20px] h-[20px] text-white opacity-60 hover:opacity-100 cursor-pointer" onClick={openControlPanel}></MoreIcon>

            <Login v-model:open={loginPanelVisible}></Login>
            <Controls v-model:open={controlPanelVisible}></Controls>
        </div>
    )
</script>
