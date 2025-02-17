<script setup lang="jsx">
    import { h, onBeforeUnmount, watch } from 'vue'
    import { useSse } from '@/hooks/useSse'
    import { postDeepseekChatContent } from '@/api/deepseek'

    import DeepseekIcon from '@/assets/svg/deepseekIcon.svg'
    import { ArrowUpOutlined, UserOutlined } from '@ant-design/icons-vue'

    const { eventSource, data } = useSse('/deepseek/linkSse')

    const QUESTIONER = 'questioner'
    const ANSWER = 'answer'

    onBeforeUnmount(() => {
        eventSource.close()
    })

    const chatStacks = $ref([])
    let prompt = $ref()
    let loading = $ref(false)
    const sendPrompt = async () => {
        if (prompt && chatStacks[chatStacks.length - 1]?.type !== QUESTIONER) {
            loading = true
            chatStacks.push({ type: QUESTIONER, content: prompt })
            await postDeepseekChatContent({ prompt })
            prompt = ''
        }
    }

    let answerContent = $ref('')
    watch(data, chunk => {
        if (chunk.choices[0].finish_reason) {
            chatStacks.push({ type: ANSWER, content: answerContent })
            answerContent = ''
            loading = false
        } else {
            answerContent = answerContent.concat(chunk.choices[0].delta.content || '')
        }
    })

    defineRender(
        <div class="flex flex-col items-center justify-center rounded-[6px] h-full">
            <div class="w-[50%] flex-1 overflow-y-auto flex flex-col items-center gap-y-[40px] p-[20px]">
                {chatStacks.map(item => {
                    return item.type === QUESTIONER ? (
                        <div class="w-full flex justify-end gap-x-[10px]">
                            <p class="w-[80%] text-right text-white">{item.content}</p>
                            <ProAvatar class="bg-[#87d068] min-w-[32px] min-h-[32px]" v-slots={{ icon: () => h(UserOutlined) }}></ProAvatar>
                        </div>
                    ) : (
                        <div class="w-full flex flex-col gap-x-[10px]">
                            <div class="w-full flex items-center">
                                <ProAvatar class="bg-transparent min-w-[32px] min-h-[32px]" v-slots={{ icon: () => h(DeepseekIcon) }}></ProAvatar>
                            </div>
                            <p class="w-[80%] text-white">{item.content}</p>
                        </div>
                    )
                })}

                {answerContent || loading ? (
                    <div class="w-full flex flex-col gap-x-[10px]">
                        <div class="w-full flex items-center">
                            <ProAvatar class="bg-transparent" v-slots={{ icon: () => h(DeepseekIcon) }}></ProAvatar>
                            {loading ? <ProSpin class="w-[20px] h-[20px]"></ProSpin> : null}
                        </div>
                        <p class="w-[80%] text-white">{answerContent}</p>
                    </div>
                ) : null}
            </div>

            <div class="flex items-center gap-x-[10px] p-[20px_20px_60px_20px] rounded-[6px] w-full max-w-[50%] min-w-[30%]">
                <ProInput placeholder="please enter prompt" v-model:value={prompt} onPressEnter={sendPrompt}></ProInput>
                <ProButton disabled={!prompt} type="primary" shape="circle" class="flex items-center justify-center" onClick={sendPrompt}>
                    <ArrowUpOutlined class="text-white"></ArrowUpOutlined>
                </ProButton>
            </div>
        </div>
    )
</script>
