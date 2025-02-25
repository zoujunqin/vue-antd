/* global data */
import { ref } from 'vue'

const token = ref('')
const user = ref({})

export const useGlobalData = () => {
    const setToken = value => {
        token.value = value
    }

    const setUser = value => {
        user.value = value
    }

    return { token, setToken, user, setUser }
}
