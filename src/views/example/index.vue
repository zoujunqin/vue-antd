<script setup lang="jsx">
    import AngerSymbolColor from '@/assets/svg/anger_symbol_color.svg?component'
    import originJson from '@/assets/lottie/origin.json'

    const floatButtonSlots = {
        icon() {
            return <span>111</span>
        }
    }

    const testFetch = () => {}

    defineRender(
        <div>
            <ProLottie animationData={originJson}></ProLottie>
            <AngerSymbolColor></AngerSymbolColor>

            <ProInput placeholder="测试" onChange={() => console.log('onChange')}></ProInput>
            <ProButton onClick={testFetch}>测试 fetch 请求</ProButton>
            <ProFloatButton v-slots={floatButtonSlots}></ProFloatButton>
        </div>
    )
</script>
