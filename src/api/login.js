import http from '../utils/ky'

export const login = () => {
    return http.get('deepseek/getChatContent')
}
