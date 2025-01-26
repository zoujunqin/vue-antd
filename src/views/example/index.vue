<script setup lang="jsx">
import { onMounted } from 'vue'
import lottie from 'lottie-web'
import originJson from '@/assets/lottie/origin.json'

onMounted(() => {
    lottie.loadAnimation({
        container: document.getElementById('login-lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: originJson
    })
})

defineRender(<div id="login-lottie" class="w-[50px] h-[50px]"></div>)
</script>
