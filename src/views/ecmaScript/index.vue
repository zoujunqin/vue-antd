<script setup lang="jsx">
    import { h } from 'vue'

    const navs = $ref([])
    let currentNav = $ref()

    defineRender(
        <div class="h-full flex gap-x-[10px]">
            <Navs v-model:active={currentNav} navs={navs}></Navs>

            <div class="flex-1">{h(currentNav?.component)}</div>
        </div>
    )
</script>
