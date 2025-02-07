/* 全局的数据管理 */
import { ref } from 'vue'

const token = ref('')
const user = ref({})

export const useGlobalData = () => {
    return { token, user }
}
