import { shallowRef } from 'vue'

export const useSse = (url = '') => {
    url = [import.meta.env.VITE_API_BASE_URL, url].map(url => url.replace(/^\/|\/$/, '')).join('/')
    const ws = new WebSocket(url)

    ws.onopen = e => {
        console.log('WebSocket Open:', e)
    }

    ws.onclose = e => {
        console.log('WebSocket Close: code', e.code)
        console.log('WebSocket Close: reason', e.reason)
        console.log('WebSocket Close: wasClean', e.wasClean)
    }

    ws.onerror = e => {
        console.error('WebSocket Error:', e)
    }

    const data = shallowRef(null)
    ws.onmessage = e => {
        /* different data structure */

        if (typeof e.data === String) {
            console.log('Received data string')
        }

        if (e.data instanceof ArrayBuffer) {
            var buffer = e.data
            console.log('Received arraybuffer')
        }

        data.value = e.data
    }

    return { ws, data }
}
