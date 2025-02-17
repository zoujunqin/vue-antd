import { shallowRef } from 'vue'

export const useSse = (url = '') => {
    url = [import.meta.env.VITE_API_BASE_URL, url].map(url => url.replace(/^\/|\/$/, '')).join('/')
    const eventSource = new EventSource(url)

    eventSource.onopen = e => {
        console.log('EventSource Open:', e)
    }

    eventSource.onerror = e => {
        console.error('EventSource Error:', e.error)
    }

    const data = shallowRef([])
    eventSource.onmessage = e => {
        data.value = e.data.replace(/^data:/, '')
        data.value = JSON.parse(data.value)
    }

    return { eventSource, data }
}
