import http from '../utils/ky'

export const postDeepseekChatContent = json => {
    return http.post('deepseek/getChatContent', { json })
}
