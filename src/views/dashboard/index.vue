<script setup lang="jsx">
    const floatButtonSlots = {
        icon() {
            return <span>111</span>
        }
    }

    defineRender(
        <div>
            <ProInput placeholder="测试" onChange={() => console.log('onChange')}></ProInput>
            <ProButton>测试按钮</ProButton>
            <ProFloatButton v-slots={floatButtonSlots}></ProFloatButton>
        </div>
    )
</script>
