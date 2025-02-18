/* Large amount of cpu computing */

let count = 0

setInterval(() => {
    count++
    postMessage(count)
}, 1000)

onmessage = e => {
    console.log('from main thread:', e.data)
}
