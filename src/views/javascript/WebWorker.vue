<script setup lang="jsx">
    let webWorker = $ref()
    let count = $ref(0)
    const startWorker = () => {
        if (typeof Worker === undefined) {
            console.error('browser not support web worker')
            return
        }

        webWorker = new Worker(new URL('./webWorker.js', import.meta.url))

        webWorker.onmessage = e => {
            count = e.data
        }
    }

    const stopWorker = () => {
        webWorker.terminate()
    }

    const postMessageToWorker = () => {
        webWorker?.postMessage('Hi, I am main thread')
    }

    defineRender(
        <div>
            <h3>
                WebWorker 不参与 UI 相关任务，只参与 js 的计算。<br></br>
            </h3>

            <h4> webWorker 递增计算 {count} </h4>

            <div class="flex gap-x-[10px]">
                <ProButton type="primary" onClick={startWorker}>
                    startWorker
                </ProButton>

                <ProButton type="primary" onClick={stopWorker}>
                    stopWorker
                </ProButton>

                <ProButton type="primary" onClick={postMessageToWorker}>
                    postMessageToWorker
                </ProButton>
            </div>
        </div>
    )
</script>
