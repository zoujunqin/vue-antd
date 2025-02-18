<script setup lang="jsx">
    const registerServiceWorker = async () => {
        if ('serviceWorker' in navigator) {
            try {
                const serviceWorker = await navigator.serviceWorker.register(new URL('./serviceWorker.js', import.meta.url), { scope: '/' })
                if (serviceWorker.installing) {
                    console.log('Service worker installing')
                } else if (serviceWorker.waiting) {
                    console.log('Service worker installed')
                } else if (serviceWorker.active) {
                    console.log('Service worker activated')
                }
            } catch (error) {
                console.error('register failed:', error)
            }
        }
    }

    defineRender(
        <div>
            <h3>
                ServiceWorker: 简单的理解就是 离线缓存，弥补 web app 无法缓存数据的缺陷。实现类似原生 app
                的缓存数据加载后可以再远程请求数据的功能。与中间缓存代理类似. <br></br>
                需要运行在 https 协议下
            </h3>

            <div class="flex gap-x-[10px]">
                <ProButton type="primary" onClick={registerServiceWorker}>
                    注册 ServiceWorker
                </ProButton>
            </div>
        </div>
    )
</script>
