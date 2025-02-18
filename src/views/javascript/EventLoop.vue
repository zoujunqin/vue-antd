<script setup lang="jsx">
    defineRender(
        <div class="flex flex-col gap-y-[10px]">
            <h3 class="w-full"> javascript 是单线程的，为了防止阻塞出现了事件循环机制 </h3>
            <h4 class="w-full">
                宏任务(macroTask) : <br></br>
                1. script 脚本整体代码 <br></br>
                2. setTimeout,setInterval <br></br>
                3. I/O， UI渲染 <br></br>
                4. requestAnimationFrame <br></br>
            </h4>
            <h4 class="w-full">
                微任务(microTask):<br></br>
                1. promise <br></br>
                2. mutationObserver <br></br>
                3. process.nextTick(node) <br></br>
            </h4>

            <h4>
                如果将 script 脚本当作宏任务，那就是宏任务的优先级高，反之微任务的优先级高 <br></br>
                将宏任务推入宏任务队列，微任务推入微任务的队列 <br></br>
                当前宏任务中遇到微任务推入微任务的队列，执行完毕后开始执行微任务队列 <br></br>
                当前微任务中遇到宏任务推入宏任务的队列，执行完毕后开始执行宏任务队列 <br></br>
                直到两个队列都是空的 <br></br>
            </h4>
        </div>
    )
</script>
