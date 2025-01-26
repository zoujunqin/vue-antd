<script setup lang="jsx">
import Top from './Top.vue'
import Left from './Left.vue'
import Main from './Main.vue'
import Controls from './Controls.vue'

defineRender(
    <div class="flex flex-col h-full">
        <Top></Top>

        <div class="flex-1 flex">
            <Left></Left>
            <Main class="flex-1 h-full"></Main>
        </div>

        <Controls></Controls>
    </div>
)
</script>
