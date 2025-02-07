<script setup lang="jsx">
    import { onMounted } from 'vue'
    import lottie from 'lottie-web'

    const emits = defineEmits(['update:animation'])
    const props = defineProps({
        animation: { type: Object, default: () => ({}) },

        /* lottie options */
        renderer: { type: String, default: 'svg' },
        name: { type: String, default: '' },
        loop: { type: Boolean, default: true },
        autoplay: { type: Boolean, default: true },
        path: { type: String, default: '' },
        animationData: { type: Object, default: () => ({}) }
    })

    const id = new Date().getTime()

    onMounted(() => {
        const animation = lottie.loadAnimation({
            name: props.name,
            container: document.getElementById(id),
            renderer: props.renderer,
            loop: props.loop,
            autoplay: props.autoplay,
            path: props.path,
            animationData: props.animationData
        })
        emits('update:animation', animation)
    })

    defineRender(<div id={id} class="w-[50px] h-[50px]"></div>)
</script>
